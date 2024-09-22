import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationResquest } from '../types/authentication-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(req: AuthenticationResquest) {
    console.log(req);
    return this._http
      .post<LoginResponse>(
        environment.baseUri + '/api/v1/auth/authenticate',
        req
      )
      .pipe(
        tap((value) => {
          console.log(value);
          sessionStorage.setItem('auth-token', value.access_token);
        })
      );
  }
}
