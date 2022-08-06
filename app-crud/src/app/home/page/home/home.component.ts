import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeForm() {
    this.formVisible = false;
  }

}
