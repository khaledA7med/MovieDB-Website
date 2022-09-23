import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errors:string ='';
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}

  registerForm(registerform: any) {
    console.log(registerform.value);
    this._AuthService.register(registerform.value).subscribe({
      next:(res) =>{
        console.log(res);
        if(res.message == 'success'){
          console.log('register success');
          this._Router.navigate(['login'])
        } else {
          this.errors = res.errors.email.message;
          console.log('register fail');
        }
      }, error: (err) =>{
        console.log(err.errors.message);
      }, complete() {
        registerform.reset();
      }
    });
  }
}
