import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private HttpClient: HttpClient) {}

  getUsers() {
    return this.HttpClient.get<any>(environment.getUsers, {});
  }
}
