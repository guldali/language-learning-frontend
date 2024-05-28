import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { UserProgress } from '../../../models/user-progress.model';
import { AuthService } from '../../../services/auth.service';
import { CourseService } from '../../../services/course.service';
import { UserProgressService } from '../../../services/user-progress.service';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.scss']
})
export class UserProgressComponent implements OnInit {
  userProgressList: any[] = [];

  constructor(
    private authService: AuthService,
    private courseService: CourseService,
    private userProgressService: UserProgressService
  ) {}

  ngOnInit(): void {
    this.getUserCourses();
  }

  getUserCourses(): void {
    const userId = this.authService.userId;
    this.userProgressService.getEnrolledCourses(userId).subscribe(userCourses => {
      this.userProgressList = userCourses;
    });
  }

  updateUserProgress(progress: UserProgress): void {
    progress.completedLessons += 1; // Dummy update for demonstration
    progress.completedQuizzes += 1; // Dummy update for demonstration
    this.userProgressService.updateUserProgress(progress).subscribe(response => {
      console.log("Progress",response.message);
    });
  }
}
