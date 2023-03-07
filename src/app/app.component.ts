import { Component, EventEmitter } from '@angular/core';
import { COURSES } from './model/db-data';
import { Course } from './model/course';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courses = COURSES;

  onCustomEventClicked(course: Course) {
    console.log(
      'App component - custom browser click event bubbled...',
      course
    );
  }
}
