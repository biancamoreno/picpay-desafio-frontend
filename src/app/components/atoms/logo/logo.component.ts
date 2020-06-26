import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() route: string;
  @Input() textColor: string;
  @Input() small: boolean;
  @ViewChild('logo', { static: false }) logo: any;

  constructor() {}

  ngOnInit() {
    this.route ? this.route : '/';
  }

  ngAfterViewInit() {
    this.changeStyle();
  }

  private changeStyle(color: string = '#0d9855') {
    this.logo.nativeElement.style.fill = this.textColor ? this.textColor : color;
  }
}
