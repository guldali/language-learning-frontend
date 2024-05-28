import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});
  loginError: string = '';
  loginUserId: number = 0;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        this.loginUserId = response.id;
        if (this.isLoginSuccessful(response)) {
          this.handleSuccessfulLogin();
        } else {
          this.handleFailedLogin();
        }
      },
      (error: any) => {
        console.error('An error occurred:', error);
        this.handleFailedLogin();
      }
    );
  }

  isLoginSuccessful(response: any): boolean {
    return response && response.message === 'Login successful';
  }

  handleSuccessfulLogin(): void {
    this.snackBar.open('Login successful', 'Close', { duration: 3000 });
    this.router.navigate(['/courses']);
  }

  handleFailedLogin(): void {
    this.snackBar.open('Invalid email or password', 'Close', { duration: 3000 });
    this.loginError = 'Invalid email or password';
  }
}
