import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawbreakerModalComponent } from './lawbreaker-modal.component';
import { CardActionsModule } from '../../component/card-actions/card-actions.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CardActionsModule
  ],
  declarations: [LawbreakerModalComponent],
  exports: [
    LawbreakerModalComponent
  ]
})
export class LawbreakerModalModule { }