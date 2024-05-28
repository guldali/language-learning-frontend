import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './parent-component/components/login/login.component';
import { RegisterComponent } from './parent-component/components/register/register.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'courses',
    loadChildren: () => import('./parent-component/components/course-detail/course/course.module').then(m => m.CourseModule),
    canActivate: [AuthGuard] // Kullanıcı giriş yapmışsa rotaya erişime izin ver
  },
  { path: 'user-progress',
    loadChildren: () => import('./parent-component/components/user-progress/user-progress.module').then(m => m.UserProgressModule),
    canActivate: [AuthGuard] // Kullanıcı giriş yapmışsa rotaya erişime izin ver
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
