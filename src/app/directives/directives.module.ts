import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDirective } from './link/link.directive';

@NgModule({
  declarations: [LinkDirective],
  imports: [CommonModule],
  exports: [LinkDirective]
})
export class DirectivesModule {}
