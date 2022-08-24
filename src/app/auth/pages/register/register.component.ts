import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupandentityService } from '../../services/groupandentity.service';
import { Group } from '../../interfaces/group.interface';
import { Entity } from '../../interfaces/entity.interface';
import { CreateUser } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    nickname: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    group_id: ['', [Validators.required]],
    entity_id: ['', [Validators.required]]
  });

  resultatado: Group[] = [];
  groups: Group[] = [];
  entitys: Entity[] = [];
  body?: CreateUser;

  constructor( private fb: FormBuilder,
               private router: Router,
               private groupandentityService: GroupandentityService,
               private authService: AuthService ) { }

  ngOnInit(): void {

    this.groupandentityService.getGroup()
      .subscribe( group => {

        this.groups = group;

      });

    this.groupandentityService.getEntity()
      .subscribe( entity => {
        this.entitys = entity;
      });

  }

  registro() {

    if(this.miFormulario.value){
      this.body = this.miFormulario.value;

      Object.defineProperty(this.body, 'active', { value: true, enumerable: true });

      this.authService.registro(this.body!)
        .subscribe( ok => {
          if( ok === true ){
            this.router.navigateByUrl('/dashboard');
            Swal.fire({
              icon: 'success',
              title: 'Usuario creado',
              text: 'Usuario creado correctamente'
            })
          }else {
            Swal.fire({
              icon: 'error',
              title: ok[0].value,
              text: ok[0].msg,
            })
          }
        })
    }




  }

}
