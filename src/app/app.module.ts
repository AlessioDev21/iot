import { PendingRegistrationComponent } from './components/pending-registrations/pending-registrations.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserService } from './services/user.service';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { AffittuarioHomeComponent } from './components/affittuario-home/affittuario-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { CompanyService } from './services/company.service';
import { AffittuarioService } from './services/affittuario.service';
import { AdminService } from './services/admin.service';
import { ModalBlankComponent } from './components/modal-blank/modal-blank.component';
import { ModalWaitComponent } from './components/modal-wait/modal-wait.component';
import { CompanyVectorService } from './services/company-vector.service';
import { VectorService } from './services/vector.service';
import { RouteService } from './services/route.service';
import { ViaggioRouteService } from './services/viaggio-route.service';
import { DatePipe } from '@angular/common';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { IgxGeographicMapModule } from 'igniteui-angular-maps';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { ViaggioService } from './services/viaggio.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    AdminHomeComponent,
    CompanyHomeComponent,
    AffittuarioHomeComponent,
    PendingRegistrationComponent,
    ModalComponent,
    ModalBlankComponent,
    ModalWaitComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule
  ],
  providers: [
            {
              provide: MatDialogRef,
              useValue: {}
            },
              UserService,
              CompanyService,
              AffittuarioService,
              AdminService,
              CompanyVectorService,
              VectorService,
              RouteService,
              ViaggioRouteService,
              DatePipe,
              ViaggioService

                          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
