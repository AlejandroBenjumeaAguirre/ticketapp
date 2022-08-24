import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, Body, CreateUser, User } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user?: Body;

  get user() {
    return { ...this._user };
  }

  constructor( private http: HttpClient ) { }

  login( nickname: string, password: string ) {

    const url = `${ this.baseUrl }/auth/login`;
    const body = { nickname, password };

    return this.http.post<AuthResponse>(url, body)
     .pipe(
      tap( ({ok, token}) => {
        if(ok){
          localStorage.setItem('token', token! );
        }

      }),
      map( resp => resp.ok ),
      catchError( err => of(err.error.msg) )
     );

  }

  registro( body: CreateUser ) {

    const url = `${ this.baseUrl }/usuarios`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '');

    return this.http.post<CreateUser>(url, body, { headers })
    .pipe(
      map( resp => resp.ok ),
      catchError( err =>  of(err.error.errors) )
     );


  }

  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '');


    return this.http.get<AuthResponse>(url, { headers })
     .pipe(
      map( resp => {
        localStorage.setItem('token', resp.token! );
        if(resp.ok){
          delete resp.body?.password;
          this._user = resp.body;
        }
        return resp.ok;
      }),
      catchError( err => of(false))
     );

  }

  logout() {
    localStorage.clear();
  }

}
