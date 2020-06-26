import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = this.type ? this.type : 'button';
  @Input() text: string = this.text ? this.text : 'Enviar';
  @Input() outline: boolean = this.outline ? this.outline : false;
  @Input() status: string = this.status ? this.status : '';

  constructor() {}

  ngOnInit() {}
}
