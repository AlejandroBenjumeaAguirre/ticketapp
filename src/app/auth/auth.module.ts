import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { AngularMaterialModule } from '../Material/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ObjToArryGEPipe } from '../pipes/obj-to-arry-ge.pipe';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ObjToArryGEPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
