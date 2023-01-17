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

  @Output('customEventClicked') customEventEmitter = new EventEmitter<Course>();

  onCustomButtonClicked() {
    console.log('Card component - custom browser event clicked...');

    this.customEventEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  //cardClasses() {
    //return {
    //'beginner': true,
    //'intermediate': false,
    //beginner: true,
    //intermediate: false,
    //beginner: this.course.category == 'BEGINNER',
    //intermediate: this.course.category == 'INTERMEDIATE',
    //advanced: this.course.category == 'ADVANCED',
    //};
    //if (this.course.category == 'BEGINNER') {
    //  return ['beginner'];
    //if (this.course.category == 'BEGINNER') {
    //  return 'beginner';
    //} else if (this.course.category == 'INTERMEDIATE') {
    //  return 'intermediate';
    //} else if (this.course.category == 'ADVANCED') {
    //  return 'advanced';
    //}
  //}
}
