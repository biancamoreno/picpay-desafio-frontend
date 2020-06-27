import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private HttpClient: HttpClient) {}

  setPayment(paymentData) {
    return this.HttpClient.post(environment.postTransaction, paymentData);
  }
}
