import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Environment, RemoveEnvironmentOptions } from '../types/environment';

@Injectable()
export class EnvironmentsService {
  private baseUrl: string = 'https://autoconfig.backbase.com/api/';

  constructor(private http: Http) {}

  getAll(): Promise<Environment[]> {
    return this.http.get(`${this.baseUrl}environments/`)
      .toPromise()
      .then(response => response.json() as Environment[])
      // Uncomment next line when using static mock data
      // .then((response: any) => response.data as Environment[])
      .catch(this.transformErrorResponse);
  }

  remove(options: RemoveEnvironmentOptions): Promise<null> {
    return this.http.delete(`${this.baseUrl}environments/${options.environmentName}`)
      .toPromise()
      .catch(this.transformErrorResponse);
  }

  private transformErrorResponse(error: any) {
    let message = 'Unexpected server error. Please report an issue to https://github.com/bponomarenko/autoconfig-app/issues';
    if(error.status === 0) {
      message = 'Unable to process request due to CORS browser restrictions.';
    }

    throw new Error(message);
  }
}
