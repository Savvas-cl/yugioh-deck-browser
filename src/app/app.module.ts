import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardInformationComponent } from './card-information/card-information.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
