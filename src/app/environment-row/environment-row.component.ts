import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Environment } from '../environment';

@Component({
  selector: 'ac-environment-row',
  templateUrl: './environment-row.component.html',
  styleUrls: ['./environment-row.component.css']
})
export class EnvironmentRowComponent {
  @Input() environment: Environment;
  @Output() remove = new EventEmitter<string>();

  onRemove() {
    this.remove.emit(this.environment.name);
  }
}
