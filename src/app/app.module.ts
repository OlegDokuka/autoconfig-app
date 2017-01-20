import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EnvironmentsService } from './services/environments.service';
import { EnvironmentRowComponent } from './environment-row/environment-row.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentRowComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [EnvironmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
