import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() course: Course;

  @Input() cardIndex: number;

  // @Output() customEventClicked = new EventEmitter<Course>();
  @Output('customEventClicked') customEventEmitter = new EventEmitter<Course>();

  onCustomButtonClicked() {
    console.log('Card component - custom browser event clicked...');

    // this.customEventClicked.emit(this.course);
    this.customEventEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
