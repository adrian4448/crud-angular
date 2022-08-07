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

  public registerPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url, person);
  }

  public deletePerson(personId: number): Observable<Person> {
    return this.http.delete<Person>(`${this.url}/${personId}`);
  }

  public alterPerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.url}/${person.id}`, person);
  }

}
