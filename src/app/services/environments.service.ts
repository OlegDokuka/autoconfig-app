import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Environment } from '../environment';

@Injectable()
export class EnvironmentsService {
  private baseUrl: string = 'https://autoconfig.backbase.com/api/';

  constructor(private http: Http) {}

  getAll(): Promise<Environment[]> {
    return this.http.get(`${this.baseUrl}environments/`)
      .toPromise()
      .then(response => response.json() as Environment[]);
      // Comment previous and uncomment next line when using static mock data
      // .then(response => response.json().data as Environment[]);
  }

  remove(name: string): Promise<any> {
    return this.http.delete(`${this.baseUrl}environments/${name}`)
      .toPromise();
  }
}
