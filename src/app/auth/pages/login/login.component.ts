import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nickname: ['alejandro10', [Validators.required]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }

  login(){

    const { nickname, password } = this.miFormulario.value;

    this.authService.login( nickname, password )
      .subscribe( ok => {
        console.log(ok);
        if( ok === true ){
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: ok,
          })
        }
      });

  }

}
