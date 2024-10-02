import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  ngOnInit(): void {
    console.log('Componente inicializado')
  }
  users: string[] = [
    'pedro',
    'Carlos',
    'Maria',
    'Joana'
  ];
}
