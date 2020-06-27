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
import { AngularPaginatorModule } from 'angular-paginator';
import { SimpleModalComponent } from './molecules/simple-modal/simple-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SimpleModalComponent
  ],
  imports: [CommonModule, DirectivesModule, RouterModule, FormsModule, AngularPaginatorModule, MatDialogModule],
  exports: [
    LogoComponent,
    ButtonComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SimpleModalComponent
  ],
  entryComponents: [SimpleModalComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ]
})
export class ComponentsModule {}
