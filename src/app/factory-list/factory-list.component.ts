import { Component, OnInit } from '@angular/core';

import { Factory } from '../../model/factory'; 

@Component({
  selector: 'app-factory-list',
  templateUrl: './factory-list.component.html',
  styleUrls: ['./factory-list.component.css']
})
export class FactoryListComponent implements OnInit {

  private factories: Factory;

  constructor() { }

  ngOnInit() {
  }

}
