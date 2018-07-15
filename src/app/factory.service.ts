import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Factory } from '../model/factory';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  factories : Factory[] = [
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

  constructor() { }

  getFactories(): Observable<Factory[]>{
      return of(this.factories);
  }

}
