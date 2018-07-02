import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactoryListComponent } from '../factory-list/factory-list.component';

const routes: Routes = [
  { path: '', component: FactoryListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
