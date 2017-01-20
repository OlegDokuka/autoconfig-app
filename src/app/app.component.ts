import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { EnvironmentsService } from './services/environments.service';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  environments: Object[] = null;
  selection: string[] = [];

  constructor(private envService: EnvironmentsService, private snackbar: MdSnackBar) {
    this.load();
  }

  refresh() {
    this.load();
  }

  remove(name: string) {
    this.envService.remove(name)
      .subscribe(() => {
        this.environments = this.environments.filter((env: any) => env.name !== name);
      },
      (error: any) => {
        console.log(error);
        this.showError('test');
      });
  }

  clearSelection() {
    this.selection = [];
  }

  trackByName(index: number, env: any) {
    return env.name;
  }

  private load() {
    if(this.loading) {
      return;
    }

    this.loading = true;

    this.envService.getAll()
      .subscribe((data: Object[]) => {
        this.environments = data.splice(0);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        this.loading = false;
      });
  }

  private showError(message: string) {
    this.snackbar.open(`ERROR: ${message}`, 'Close');
  }
}
