import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdtimepickerBasic } from './timepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Timepicker page',
      urls: [{title: 'Dashboard', url: '/'},{title: 'Angular Component'},{title: 'Timepicker page'}]
    },
	component: NgbdtimepickerBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      ReactiveFormsModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdtimepickerBasic]
})
export class TimepickerModule { }
