import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, of, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7228/api/auth';

  public userId: any | null = null;
  public mockUsers: any[] = [];

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData).pipe(
      catchError(this.handleError),
      tap((response: any) => {
        this.userId = response.id;
      })
    );
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData).pipe(
      catchError(this.handleError),
      tap((response: any) => {
        this.userId = response.id;
      })
    );
  }


  handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong with the request; please try again later.'));
  }

  getUserId(): any | null {
    return this.userId;
  }

  isLoggedIn(): boolean {
    return this.userId !== null;
  }

// Mock register
  registerMock(user: any): Observable<any> {
    const newUser = {
      id: this.mockUsers.length + 1,
      email: user.email,
      password: user.password
    };
    this.mockUsers.push(newUser);
    return of({ success: true });
  }

  // Mock login
  loginMock(userData: any): Observable<any> {
    const foundUser = this.mockUsers.find(u => u.email === userData.email && u.password === userData.password);
    if (foundUser) {
      this.userId = foundUser.id;
      return of({ success: true, id: foundUser.id });
    } else {
      return of({ success: false });
    }
  }
}
