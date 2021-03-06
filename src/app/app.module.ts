import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FinanceService} from './finance.service';
import {HttpClientModule} from '@angular/common/http'
import { ChartsModule } from 'ng2-charts';

import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineComponent } from './charts/components/line/line.component';
import { PieComponent } from './charts/components/pie/pie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InfoSectionComponent } from './top-section/info-section/info-section.component';
import { ChartSectionComponent } from './charts/chart-section/chart-section.component';
import { DebtSectionComponent } from './charts/debt-section/debt-section.component';
import { FooterComponent } from './footer/footer.component';
import { TodayComponent } from './top-section/today/today.component';
import { TodayStockComponent } from './top-section/today-stock/today-stock.component';
import { DebtComponent } from './bottom-section/debt/debt.component';

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
    FooterComponent,
    TodayComponent,
    TodayStockComponent,
    DebtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,HttpClientModule,ChartsModule
  ],
  providers: [FinanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
