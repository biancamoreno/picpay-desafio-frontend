import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { AppComponent } from './app.component';
import { LinkDirective } from './directives/link.directive';

@NgModule({
  declarations: [AppComponent, LinkDirective],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
