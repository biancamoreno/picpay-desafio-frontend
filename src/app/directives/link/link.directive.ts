import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[link]'
})
export class LinkDirective implements OnInit {
  @Input() textColor: string;
  constructor(private _elemento: ElementRef) {}

  public ngOnInit() {
    this.changeStyle();
  }

  private changeStyle(color: string = '#0d9855') {
    this._elemento.nativeElement.style.color = this.textColor ? this.textColor : color;
    this._elemento.nativeElement.style.cursor = 'pointer';
  }
}
