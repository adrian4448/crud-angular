import { Component, OnInit, EventEmitter, Output, Input, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sex } from '../../model/enum/sex.enum';
import { Person } from '../../model/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck {

  @Output() register = new EventEmitter();

  @Output() alter = new EventEmitter();

  @Input() personSelected: Person = { name: '', age: 1, sex: Sex.MASCULINO };

  public peopleForm: FormGroup = this.formBuilder.group({
    name: [this.personSelected.name],
    age: [this.personSelected.age],
    sex: [this.personSelected.sex],
  });

  public personHasSelected = false;

  constructor(private personService: PersonService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if (this.personSelected.id && !this.personHasSelected) {
      this.peopleForm = this.formBuilder.group({
        name: [this.personSelected.name],
        age: [this.personSelected.age],
        sex: [this.personSelected.sex],
      });
      this.personHasSelected = true;
    }
  }

  emitRegister() {
    const person: Person = this.peopleForm.value;
    person.id = this.personSelected.id;
    person.createDate = new Date().toLocaleString();
    
    if (!this.personHasSelected) {
      this.personService.registerPerson(person).subscribe(res => this.register.emit(res));
    } else {
      this.personService.alterPerson(person).subscribe(res => this.alter.emit(res));
    }
    this.clear();
  }

  clear() {
    this.peopleForm = this.formBuilder.group({
      name: [''],
      age: [1],
      sex: ['MASCULINO']
    });

    this.personSelected = { name: '', age: 0, sex: Sex.MASCULINO };
    this.personHasSelected = false;
  }

}
