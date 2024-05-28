import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseListModel } from '../../../models/course-list.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: CourseListModel[] = [
    { id: 1, title: 'Spanish for Beginners', description: 'An introductory course to learn Spanish.', instructor: 'Maria Martinez' },
    { id: 2, title: 'Advanced French', description: 'An advanced course to enhance your French skills.', instructor: 'Jean-Luc Dubois' },
    { id: 3, title: 'Turkish for Beginners', description: 'An advanced course to enhance your Turkish skills.', instructor: 'Güldali Yamangöktürk' },
    { id: 4, title: 'Advanced Turkish', description: 'An advanced course to enhance your Turkish skills.', instructor: 'Güldali Yamangöktürk' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToCourse(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}
