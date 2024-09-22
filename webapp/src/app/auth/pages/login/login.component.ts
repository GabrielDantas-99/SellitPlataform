import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../../../types/login-form';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationResquest } from 'src/app/types/authentication-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [
    AuthLayoutComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  submit() {
    console.log(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.login(this.returnAuthenticationRequest()).subscribe({
      next: () => {
        this.toastr.success('Login feito com sucesso!');
        this.router.navigate(['admin']);
      },
      error: () =>
        this.toastr.error('Erro inesperado! Tente novamente mais tarde'),
    });
  }

  returnAuthenticationRequest() {
    const req: AuthenticationResquest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    return req;
  }

  navigate() {
    this.router.navigate(['signup']);
  }
}
