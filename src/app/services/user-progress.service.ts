import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProgress } from '../models/user-progress.model';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class UserProgressService {
  private userProgressUrl = 'https://localhost:7228/api';

  constructor(private http: HttpClient) { }

  getUserProgress(userId: string): Observable<UserProgress[]> {
    return this.http.get<UserProgress[]>(`${this.userProgressUrl}/${userId}`);
  }

  updateUserProgress(progress: UserProgress): Observable<any> {
    return this.http.put<any>(`${this.userProgressUrl}/update`, progress);
  }

  getEnrolledCourses(userId: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.userProgressUrl}/courses/user/${userId}`);
  }
}
