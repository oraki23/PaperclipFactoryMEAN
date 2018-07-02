import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Paperclip Factory';
  totalPaperclips = 200;
  totalMoney = 200;

  constructor(service: SharedService){
    service.onMainEvent.subscribe(
      (moneyToAdd) => {
        this.totalMoney = this.totalMoney + moneyToAdd;
      }
    )
  }
}
