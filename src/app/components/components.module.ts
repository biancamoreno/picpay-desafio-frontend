import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './atoms/logo/logo.component';
import { ButtonComponent } from './atoms/button/button.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './organisms/header/header.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { ListComponent } from './molecules/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogoComponent, ButtonComponent, NavbarComponent, HeaderComponent, FooterComponent, ListComponent],
  imports: [CommonModule, DirectivesModule, RouterModule, FormsModule],
  exports: [LogoComponent, ButtonComponent, NavbarComponent, HeaderComponent, FooterComponent, ListComponent]
})
export class ComponentsModule {}
