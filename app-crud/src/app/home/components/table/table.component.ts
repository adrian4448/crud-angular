import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  public trashIcon = faTrashCan;
  public penIcon = faPen;

  @Input() public values: Person[] = [];

  @Output() public delete = new EventEmitter();

  @Output() public select = new EventEmitter();

  ngOnInit(): void { }

  emitDelete(personId: number | undefined) {
    this.delete.emit(personId);
  }

  emitSelect(person: Person) {
    this.select.emit(person);
  }

}
