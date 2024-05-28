import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './parent-component/components/register/register.component';
import { LoginComponent } from './parent-component/components/login/login.component';
import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { ParentComponent } from './parent-component/parent.component';
import {CourseModule} from "./parent-component/components/course-detail/course/course.module";
import {UserProgressModule} from "./parent-component/components/user-progress/user-progress.module";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    CourseModule,
    UserProgressModule,
    MatTooltipModule
  ],
  providers: [AuthService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
