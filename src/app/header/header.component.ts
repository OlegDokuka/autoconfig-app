import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() loading: boolean;
  // @Input() selection: string[] = [];

  @Output() refresh = new EventEmitter();
  // @Output() back = new EventEmitter();

  // get selectionLength() {
  //   return this.selection.length;
  // }

  onRefresh() {
    this.refresh.emit();
  }

  // onBack() {
  //   this.back.emit();
  // }
}
