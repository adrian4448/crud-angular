import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './page/home/home.component';
import { PersonService } from './services/person.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonService]
})
export class HomeModule { }
