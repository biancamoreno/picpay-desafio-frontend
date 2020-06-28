import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public ROOT_URl = environment.getUsers;

  constructor(private HttpClient: HttpClient) {}

  getUsers() {
    return this.HttpClient.get<any>(this.ROOT_URl, {});
  }
}
