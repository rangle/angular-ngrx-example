import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private readonly location = 'http://www.mocky.io/v2';

  constructor(private http: Http) {

  }

  public get(path: string): Observable<any> {
    return this.http.get(`${this.location}${path}`)
      .map(response => response.json());
  }

}
