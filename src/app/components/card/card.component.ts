import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';

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
      // 'card--beginner': true,
      // 'card--intermediate': false,
      // 'card--advanced': false,

      // 'card--beginner': this.course.category == 'BEGINNER',
      // 'card--intermediate': this.course.category == 'INTERMEDIATE',
      // 'card--advanced': this.course.category == 'ADVANCED',
    //};

    // if (this.course.category == 'BEGINNER') { return ['card--beginner']; }
    // if (this.course.category == 'BEGINNER') { return 'card--beginner'; }
    // else if (this.course.category == 'INTERMEDIATE') { return 'card--intermediate'; }
    // else if (this.course.category == 'ADVANCED') { return 'card--advanced'; }

  //}
}
