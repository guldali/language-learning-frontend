import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProgressRoutingModule } from './user-progress-routing.module';
import { MatCardModule } from '@angular/material/card';
import { UserProgressComponent } from "./user-progress.component";

@NgModule({
  declarations: [
    UserProgressComponent
  ],
  exports: [
    UserProgressComponent
  ],
  imports: [
    CommonModule,
    UserProgressRoutingModule,
    MatCardModule
  ]
})
export class UserProgressModule { }
