import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

@NgModule({
  declarations: [PaymentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PaymentModule {}
