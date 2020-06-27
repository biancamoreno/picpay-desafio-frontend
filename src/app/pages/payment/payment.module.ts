import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent, DialogTransaction } from './payment.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatSelectModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

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
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }]
})
export class PaymentModule {}
