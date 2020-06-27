import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  users: any;
  feedback: any;
  constructor(private _usersService: UsersService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe(_users => (this.users = _users));
  }

  handleItem(event) {
    this.openDialog(event.data);
  }

  openDialog(user): void {
    const dialogRef = this.dialog.open(DialogTransaction, {
      panelClass: 'transaction-dialog',
      data: { name: user.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.feedback = result;
    });
  }
}

@Component({
  selector: 'dialog-transaction',
  templateUrl: 'dialog-transaction.html'
})
export class DialogTransaction {
  name: string;
  transactionForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogTransaction>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _formBuilder: FormBuilder
  ) {
    this.transactionForm = this._formBuilder.group({
      valuePayment: ['', [Validators.required]],
      creditCard: ['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
