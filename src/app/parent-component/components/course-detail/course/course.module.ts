import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CourseListComponent } from "../../course-list/course-list.component";
import { CourseDetailComponent } from "../course-detail.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent
  ],
  exports: [
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class CourseModule { }
