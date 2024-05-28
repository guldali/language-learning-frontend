import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { Course } from "../../../models/course.model";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseId: number | null = null;
  course: Course | null = null;
  enrollCourses: Course[] = [];

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null && id.trim() !== '') {
      this.courseId = parseInt(id, 10);
      this.getCourseDetails(this.courseId);
    } else {
      console.error('Course ID is null or empty');
    }
  }

  enroll(courseId: number): void {
    this.courseService.enrollUserInCourse(courseId).subscribe(response => {
      this.enrollCourses = response;
      this.snackBar.open('You have successfully registered for the course', 'Close', { duration: 3000 });
    }, error => {
      console.error(error);
    });
  }

  getCourseDetails(id: number): void {
    this.courseService.getCourseById(id).subscribe(course => {
      this.course = course;
    });
  }
}
