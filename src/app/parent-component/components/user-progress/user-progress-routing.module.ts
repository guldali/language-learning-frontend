import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProgressComponent } from './user-progress.component';
import { AuthGuard } from '../../../security/auth.guard';

const routes: Routes = [
  { path: '', component: UserProgressComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProgressRoutingModule { }
