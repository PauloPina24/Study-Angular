import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  //ngOnInit e uma funcao para dizer que um componente inicializou
  ngOnInit(): void {
    console.log('Uma mudanca foi feita.')
  }

}
 