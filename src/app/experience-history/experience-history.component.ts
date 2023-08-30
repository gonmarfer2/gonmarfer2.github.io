import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-history',
  templateUrl: './experience-history.component.html',
  styleUrls: ['./experience-history.component.css']
})
export class ExperienceHistoryComponent {
  @Input() entry = {
    datePlace: '',
    description: '',
    company: ''
  };

}
