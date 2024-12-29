import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userAge: number = 25;
  yourColorTrue: string = 'brown';
  yourColorFalse: string = 'red';
}
