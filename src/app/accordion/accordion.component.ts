import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() title = '';
  toggle = false;
  @Input() items:Array<String> = [];

  toggleAccordion() {
    this.toggle = !this.toggle;
  }

}
