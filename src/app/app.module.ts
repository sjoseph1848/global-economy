import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineComponent } from './charts/components/line/line.component';
import { PieComponent } from './charts/components/pie/pie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { ChartSectionComponent } from './charts/chart-section/chart-section.component';
import { DebtSectionComponent } from './charts/debt-section/debt-section.component';
import { InterestSectionComponent } from './charts/interest-section/interest-section.component';
import { MarketSectionComponent } from './charts/market-section/market-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineComponent,
    PieComponent,
    NavbarComponent,
    SidenavComponent,
    InfoSectionComponent,
    ChartSectionComponent,
    DebtSectionComponent,
    InterestSectionComponent,
    MarketSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
