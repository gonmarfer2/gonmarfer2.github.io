import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.css']
})
export class ProjectWindowComponent {
  @Input() project = {
    pictureUrl: '',
    title: '',
    description: ''
  };
}
