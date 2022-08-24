import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../interfaces/group.interface';
import { Entity } from '../interfaces/entity.interface';
import { map, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GroupandentityService {

  private _baseUrl: string = 'http://localhost:8000/api';

  constructor( private http: HttpClient ) { }

  getGroup(): Observable<Group[]>{

    return this.http.get<Group[]>(`${this._baseUrl}/group`);

  }

  getEntity(): Observable<Entity[]>{

    return this.http.get<Entity[]>(`${this._baseUrl}/entity`);

  }

}
