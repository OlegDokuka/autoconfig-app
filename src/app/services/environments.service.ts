import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EnvironmentsService {
  private baseUrl: string = 'https://autoconfig.backbase.com/api/';

  constructor(private http: Http) {}

  getAll() {
    return this.http.get(`${this.baseUrl}environments/`).map(this.toJSON);
  }

  remove(name: string) {
    return this.http.delete(`${this.baseUrl}environments/${name}`).map(this.toJSON);
  }

  private toJSON(resp: Response) {
    return resp.json();
  }
}
