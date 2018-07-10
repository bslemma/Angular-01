import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="decCounter()"> - </button> 
      <span>      {{counterValue}}     </span>
      <button (click)="incCounter()"> + </button>

    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() public counterValue:number;
  @Output() counterChange=new EventEmitter();
  constructor() {
    this.counterValue=0;
    this.counterChange.emit(this.counterValue);
   }

  ngOnInit() {
  }
  incCounter(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  decCounter(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

}
