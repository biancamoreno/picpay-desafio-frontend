import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  users: any;
  constructor(private _usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe(_users => {
      console.log(_users);
      this.users = _users;
    });
  }
}
