import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-design-frame',
  templateUrl: './design-frame.component.html',
  styleUrls: ['./design-frame.component.css']
})
export class DesignFrameComponent {
  @Input() design = {
    src:'',
    title:'',
    date:''
  };
}
