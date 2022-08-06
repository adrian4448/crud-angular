import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() register = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitRegister(form: NgForm) {
    console.log(form);
    this.register.emit(form.value);
  }

  clear(form: NgForm) {
  }

}
