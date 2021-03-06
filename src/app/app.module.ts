import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RatingComponent } from './rating/rating.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SortingComponent } from './sorting/sorting.component';
import { AdsComponent } from './ads/ads.component';
import { FilterTagsComponent } from './filter-tags/filter-tags.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    FooterComponent,
    RatingComponent,
    SliderComponent,
    SearchComponent,
    SideBarComponent,
    SortingComponent,
    AdsComponent,
    FilterTagsComponent,
  ],
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
    AppRoutingModule,
    MatBadgeModule,
    NgxSliderModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
