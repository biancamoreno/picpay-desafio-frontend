import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
