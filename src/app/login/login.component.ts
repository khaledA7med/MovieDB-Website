import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface IUser {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors: string = '';
  user: any;
  Form!: FormGroup<IUser>;
  submitted: boolean = false;

  constructor(private authService: AuthService, private _Router: Router) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.Form = new FormGroup<IUser>({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get f(): IUser {
    return this.Form.controls;
  }

  loginForm(loginform: any) {
    this.submitted = true;
    this.authService.login(loginform.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.authService.saveuser();
        this.submitted = false;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Login successfully',
        });
        this._Router.navigate(['home']);
      },
      error: () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'error',
          title: 'Login failed',
        });
      },
    });
  }

  getUser() {
    this.authService.getUser().subscribe({
      next: (res) => {
        this.user = res;
        this.f.username.patchValue(this.user.username);
        this.f.password.patchValue(this.user.password);
      },
      error: () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'error',
          title: 'error while getting user',
        });
      },
    });
  }
}
