import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [AppComponent, PlacesComponent],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
