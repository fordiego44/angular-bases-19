import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styles: `
    button{
      padding: 5px;
      margin: 5px 10px;
      width: 75px
    }
  `
})
export class CounterPageComponent {

  public counter:number = 0;
  public counterSignal = signal(10);

  increase(value: number):void{
    this.counter+= value;

    this.counterSignal.update( (currentValue) => currentValue + value);
  }

  resetCounter():void{
    this.counter = 0;

    this.counterSignal.set(0);
  }
}
