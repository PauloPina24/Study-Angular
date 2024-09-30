import { Component, type DoCheck, type OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements DoCheck{
  ngDoCheck(): void {
    console.log("Mudancas foram feitas");
  }
  num: number = 0;
  contar(){
    this.num++
  }

}
