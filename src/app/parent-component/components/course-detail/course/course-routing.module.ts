import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from "../../course-list/course-list.component";
import { CourseDetailComponent } from "../course-detail.component";
import { AuthGuard } from '../../../../security/auth.guard';

const routes: Routes = [
  { path: '', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: ':id', component: CourseDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
