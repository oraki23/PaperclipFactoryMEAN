import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Injectable()
export class SharedService {

  onMainEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
