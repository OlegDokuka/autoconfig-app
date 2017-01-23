import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnvironmentRowComponent } from './environment-row/environment-row.component';
import { LoaderComponent } from './loader/loader.component';

import { UserService } from './services/user.service';
import { EnvironmentsService } from './services/environments.service';
import { InMemoryEnvironmentsService }  from './services/in-memory.environments.service';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentRowComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Uncomment next line to use static mock data
    // InMemoryWebApiModule.forRoot(InMemoryEnvironmentsService),
  ],
  providers: [EnvironmentsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
