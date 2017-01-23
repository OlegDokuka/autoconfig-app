import { Component } from '@angular/core';

import { EnvironmentsService } from './services/environments.service';
import { Environment } from './types/environment';
import { showError } from './utils';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  environments: Environment[] = null;

  constructor(private envService: EnvironmentsService) {
    this.load();
  }

  load() {
    if(this.loading) {
      return;
    }

    this.loading = true;
    this.environments = null;

    this.envService.getAll()
      .then((data: Environment[]) => {
        this.environments = data.splice(0);
      })
      .catch(showError)
      .then(() => {
        this.loading = false;
      });
  }

  onRemove(name: string) {
    this.environments = this.environments.filter((env: Environment) => env.name !== name);
  }

  trackByName(index: number, env: Environment) {
    return env.name;
  }
}
