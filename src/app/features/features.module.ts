import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WhiteListComponent } from './white-list/white-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    WhiteListComponent
  ],
  exports: [
    WhiteListComponent,
  ]
})
export class FeaturesModule { }
