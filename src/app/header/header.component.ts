import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectedFeature = new EventEmitter<string>();

  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
  }

  constructor() {
    console.log(this.selectedFeature);
  }
}
