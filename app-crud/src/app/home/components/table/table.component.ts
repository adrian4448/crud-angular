import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private personService: PersonService) { }

  public personList: Person[] = [];

  ngOnInit(): void {
    this.personService.findAllPersons().subscribe((response: Person[]) => {
      this.personList = response;
    });
  }

}
