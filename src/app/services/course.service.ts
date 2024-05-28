import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'https://localhost:7228/api/courses';

  userProgressList: any | null = null;

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl); // Tüm kursları getir
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`); // Belirli bir kursu getir
  }

  enrollUserInCourse(courseId: number): Observable<any> {  // Kullanıcının kursa kaydolması işlemi
    return this.http.get<any>(`${this.apiUrl}/${courseId}`).pipe(
      tap((response: any) => {
        this.userProgressList = response;
      }),
    );
  }

  updateUserProgressList(): void {
    return this.userProgressList;
  }
}
