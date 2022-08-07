import { Component, OnInit } from '@angular/core';
import { Sex } from '../../model/enum/sex.enum';
import { Person } from '../../model/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private personService: PersonService) { }

  public persons: Person[] = [];

  public personSelected: Person = { name: '', age: 0, sex: Sex.MASCULINO };;

  ngOnInit(): void {
    this.personService.findAllPersons().subscribe((response: Person[]) => {
      this.persons = response;
    });
  }

  registerPerson(person: Person): void {
    this.persons.push(person);
  }

  alterPerson(person: Person): void {
    const index = this.persons.findIndex(p => p.id === person.id);
    this.persons[index] = person;
  }

  deletePerson(personId: number): void {
    this.personService.deletePerson(personId).subscribe(() => {
      const index = this.persons.findIndex(p => p.id === personId);
      this.persons.splice(index, 1);
    });
  }

  selectPerson(person: Person): void {
    this.personSelected = person;
  }

}
