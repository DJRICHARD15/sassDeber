import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginform: FormGroup
  registroUsuariosForm: FormGroup
  usuario:string
  email: string
  password: string
  mensaje :any

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.crearLoginForm();
    
  }

  crearLoginForm(){
    this.loginform = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email,Validators.minLength(5)]],
      password: ['' ,[Validators.required,Validators.minLength(6)]],
      mensaje:['']
    });
  }

  validaLoginForm(){
    if(this.loginform.valid){
      this.usuario=this.loginform.controls['usuario'].value
      this.email = this.loginform.controls['email'].value
      this.password = this.loginform.controls['password'].value
    }else{
      this.usuario = JSON.stringify(this.loginform.controls['usuario'].errors)
      this.email = JSON.stringify(this.loginform.controls['email'].errors)
      this.password =JSON.stringify(this.loginform.controls['password'].errors)
      this.mensaje =  JSON.stringify(this.loginform.controls['mensaje'].errors)
      if(this.mensaje){
        alert('usuario'+this.usuario),
        alert('email'+this.email),
        alert('password'+this.password)
      }if(this.mensaje!=JSON.stringify(this.loginform.controls['mensaje'].errors)){ 
               alert('datos ingresados correctamente')
      }
    }
  }
}