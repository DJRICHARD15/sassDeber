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


  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.crearLoginForm();
    
  }

  crearLoginForm(){
    this.loginform = this.formBuilder.group({
      usuario: ['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
      email: ['', [Validators.required,Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')]],
      password: ['' ,[Validators.required,Validators.pattern('[a-zA-Z0-9]{5,10}')]],
    
    });
  }

  validaLoginForm(){
    if(this.loginform.valid){
      this.usuario=JSON.stringify(console.log(this.loginform.controls['usuario'].value))              
      this.email = JSON.stringify(console.log(this.loginform.controls['email'].value))
      this.password =JSON.stringify(console.log(this.loginform.controls['password'].value))
    }else{
      this.usuario = JSON.stringify(this.loginform.controls['usuario'].errors)
      this.email = JSON.stringify(this.loginform.controls['email'].errors)
      this.password =JSON.stringify(this.loginform.controls['password'].errors)
    
      if(this.loginform.invalid){
       console.log('usuario'+this.usuario),
       console.log('email'+this.email),
        console.log('password'+this.password)
      }
    }
  }
}
