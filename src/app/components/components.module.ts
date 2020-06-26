import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './atoms/logo/logo.component';
import { ButtonComponent } from './atoms/button/button.component';

@NgModule({
  declarations: [LogoComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [LogoComponent, ButtonComponent]
})
export class ComponentsModule {}
