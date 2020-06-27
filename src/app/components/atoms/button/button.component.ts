import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  @Input() outline: boolean;
  @Input() status: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.type = this.type ? this.type : 'button';
    this.text = this.text ? this.text : 'Enviar';
    this.outline = this.outline ? this.outline : false;
    this.status = this.status ? this.status : '';
  }

  onBtnClick() {
    this.btnClick.emit();
  }
}
