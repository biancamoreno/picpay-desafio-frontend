import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/pagar', pathMatch: 'full' },
  { path: 'pagar', loadChildren: './pages/payment/payment.module#PaymentModule' },
  { path: '404', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
