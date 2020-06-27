import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent, DialogTransaction } from './payment.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};
@NgModule({
  declarations: [PaymentComponent, DialogTransaction],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MatDialogModule,
    MatInputModule,
    CurrencyMaskModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ],
  entryComponents: [DialogTransaction],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class PaymentModule {}
