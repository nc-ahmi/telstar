import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { SendParcelComponent } from './components/send-parcel/send-parcel.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ChooseRouteComponent } from './components/choose-route/choose-route.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SendAnEmailToResetPasswordComponent } from './components/send-an-email-to-reset-password/send-an-email-to-reset-password.component';
import { NgbdSortableHeader } from './components/sorting/sortable.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SendParcelComponent,
    MyPageComponent,
    RegisterComponent,
    ChooseRouteComponent,
    CheckoutComponent,
    ResetPasswordComponent,
    SendAnEmailToResetPasswordComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
