import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class SharedService {

  onMainEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
