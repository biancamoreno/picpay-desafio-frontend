import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  text: string;
  success: boolean;
  status: string;
  btn: string;
}

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SimpleModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
