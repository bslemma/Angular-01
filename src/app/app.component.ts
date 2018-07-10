import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`<p> Input Counter from Parent: <input  type=text #txtCounter [value]="ComponentCounterValue" (input)="ComponentCounterValue=txtCounter.value"></p>
            <app-counter [counterValue]="ComponentCounterValue" (counterChange)="ComponentCounterValue=$event"></app-counter>
            <p>Component Counter Value = {{ComponentCounterValue}}</p>`,
        
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue=0;
  title = 'App';
}
