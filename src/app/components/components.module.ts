import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './atoms/logo/logo.component';
import { ButtonComponent } from './atoms/button/button.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './organisms/header/header.component';

@NgModule({
  declarations: [LogoComponent, ButtonComponent, NavbarComponent, HeaderComponent],
  imports: [CommonModule, DirectivesModule, RouterModule],
  exports: [LogoComponent, ButtonComponent, NavbarComponent, HeaderComponent]
})
export class ComponentsModule {}
