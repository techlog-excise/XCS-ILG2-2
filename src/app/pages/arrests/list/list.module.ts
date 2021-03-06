import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { CardActionsModule } from '../../component/card-actions/card-actions.module';
import { ArrestsService } from '../arrests.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationTableModule } from '../../component/pagination-table/pagination-table.module';

const routes: Routes = [
  {
      path: '',
      data: {
          // title: 'ค้นหาข้อมูล',
          urls: [{ title: 'หน้าหลัก', url: '/' }, { title: 'ค้นหางานจับกุม' }],
          nextPage: { title: 'งานจับกุม', url: '/arrest/manage' }
      },
      component: ListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CardActionsModule,
    PaginationTableModule
  ],
  declarations: [
    ListComponent
  ],
  providers: [ArrestsService]
})
export class ListModule { }
