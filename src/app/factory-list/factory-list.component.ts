import { Component, OnInit } from '@angular/core';

import { Factory } from 'model/factory'; 
import { SharedService } from '../shared.service';
import { FactoryService } from '../factory.service';

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.css']
})
export class FactoryListComponent implements OnInit {

  private factories: Factory[];

  constructor(private service: SharedService,
              private factoryService : FactoryService) { }

  ngOnInit() {
    this.getFactories();
  }

  sell(factory: Factory): void{
    this.factories = this.factories.filter(f => f !== factory);
    this.service.onMainEvent.emit(factory.value);
  }

  getFactories(): void{
    this.factoryService.getFactories()
      .subscribe(factories => this.factories = factories);
  }

}
