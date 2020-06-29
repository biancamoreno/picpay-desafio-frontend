import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private HttpClient: HttpClient) {}

  setPayment(paymentData) {
    return new Promise(resolve => {
      if (paymentData.card_number.slice(-4) === '1234')
        return resolve({ success: false, status: 'Reprovada' })
      this.HttpClient.post(environment.postTransaction, paymentData).subscribe(
        data => {
          return resolve(data)
        },
        error => {
          return resolve({ success: false, status: 'Reprovada' })
        }
      );
    });
  }
}
