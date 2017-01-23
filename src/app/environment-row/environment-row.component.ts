import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EnvironmentsService } from '../services/environments.service';
import { UserService } from '../services/user.service';
import { Environment } from '../types/environment';
import { User } from '../types/user';
import { showError } from '../utils';

@Component({
  selector: 'ac-environment-row',
  templateUrl: './environment-row.component.html',
  styleUrls: ['./environment-row.component.css']
})
export class EnvironmentRowComponent {
  @Input() environment: Environment;
  @Output() removed = new EventEmitter<string>();

  constructor(private envService: EnvironmentsService, private userService: UserService) {}

  remove() {
    if(!this.environment) {
      return;
    }

    this.getUser()
      .then(({ username, password}: User) => ({
        username,
        password,
        environmentName: this.environment.name
      }))
      .then(this.envService.remove)
      .catch(showError);
  }

  private getUser(): Promise<User> {
    return this.userService.getUser()
      .then((user: User) => {
        if(!user) {
          throw new Error('No user credentials specified');
        }
        return user;
      });
  }
}
