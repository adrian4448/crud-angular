import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/person'

  public findAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

}
