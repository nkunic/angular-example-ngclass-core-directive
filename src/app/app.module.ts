import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './components/card/card.module';

@NgModule({
  imports: [BrowserModule, CardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
