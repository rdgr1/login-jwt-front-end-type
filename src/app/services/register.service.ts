import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterResponse } from '../types/register-response.type';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl: string = 'http://localhost:8081/auth/register';

  constructor(private httpClient: HttpClient) {}

  register(name: string, email: string, password: string) {
    const headers = {'Content-Type':'application/json'};
    return this.httpClient.post<RegisterResponse>(this.apiUrl, { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem('message', value.message);
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        return throwError(() => new Error(error.message || 'Registration failed'));
      })
    );
  }
}
