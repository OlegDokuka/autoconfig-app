import { Component } from '@angular/core';

import { EnvironmentsService } from './services/environments.service';
import { Environment } from './environment';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  environments: Environment[] = null;
  selection: string[] = [];

  constructor(private envService: EnvironmentsService) {
    this.load();
  }

  load() {
    if(this.loading) {
      return;
    }

    this.loading = true;

    this.envService.getAll()
      .then((data: Environment[]) => {
        this.environments = data.splice(0);
        this.loading = false;
      })
      .catch((error: any) => {
        console.log(error);
        this.loading = false;
      });
  }

  remove(name: string) {
    this.envService.remove(name)
      .then(() => {
        this.environments = this.environments.filter((env: Environment) => env.name !== name);
      })
     .catch((error: any) => {
        console.log(error);
        this.showError('test');
      });
  }

  clearSelection() {
    this.selection = [];
  }

  trackByName(index: number, env: Environment) {
    return env.name;
  }

  private showError(message: string) {
  }
}
