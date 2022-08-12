import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    entity_id: ['', Validators.required]
  });

  constructor( private fb: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {
  }

  registro() {
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard');

  }

}
