import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-environment-row',
  templateUrl: './environment-row.component.html',
  styleUrls: ['./environment-row.component.css']
})
export class EnvironmentRowComponent {
  @Input() environment: any = {};
  @Output() remove = new EventEmitter<string>();

  onRemove() {
    this.remove.emit(this.environment.name);
  }
}
