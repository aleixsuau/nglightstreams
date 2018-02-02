import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatCardModule,
  MatStepperModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // Material modules
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
  CounterComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // Material modules
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    // Components
    CounterComponent,
  ]
})
export class SharedModule { }
