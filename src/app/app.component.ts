import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  nameAdded = 'Curso de Angular';
  ageAdded = 0;
  idRemoved = 0;

  values = [
    {
      name: 'João',
      age: 20,
      id: 1
    },
    {
      name: 'Abner',
      age: 27,
      id: 2
    },
    {
      name: 'Stéffany',
      age: 24,
      id: 3
    }   
  ];

  premiumCustomer = false;

  added(){
    let idAdded = this.values.length + 1;
    this.values.push({name: this.nameAdded, age: this.ageAdded, id: idAdded});
  }

  remove(){
    this.values.pop();
  }
}
