import { Component, OnInit } from '@angular/core';

import { Factory } from '../../model/factory'; 
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.css']
})
export class FactoryListComponent implements OnInit {

  private factories: Factory[];

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.factories = this.mockFactories();
  }

  mockFactories(): Factory[]{
    return [
      {
        id: 1,
        name: 'The first and the best',
        productionPerSecond: 100,
        value: 1200
      },
      {
        id: 2,
        name: 'The second is always the better',
        productionPerSecond: 150,
        value: 1300
      },
      {
        id: 3,
        name: 'Third one is the wiser',
        productionPerSecond: 200,
        value: 1500
      }
    ];
  }

  sell(factory: Factory): void{
    this.factories = this.factories.filter(f => f !== factory);
    this.service.onMainEvent.emit(factory.value);
  }

}
