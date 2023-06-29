import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CurrencyrateComponent } from './currencyrate/currencyrate.component';
import { GraphComponent } from './graph/graph.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    CurrencyrateComponent,
    GraphComponent,
    TransfermoneyComponent,
    TransactionhistoryComponent,
    AdminComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
