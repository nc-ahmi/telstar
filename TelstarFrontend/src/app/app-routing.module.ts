import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ChooseRouteComponent } from './components/choose-route/choose-route.component';
import { LoginComponent } from './components/login/login.component';
import { MyPageComponent } from './components/my-page/my-page.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SendAnEmailToResetPasswordComponent } from './components/send-an-email-to-reset-password/send-an-email-to-reset-password.component';
import { SendParcelComponent } from './components/send-parcel/send-parcel.component';

const routes: Routes = [
  { path: 'choose-route', component: ChooseRouteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'send-parcel', component: SendParcelComponent },
  { path: 'my-page', component: MyPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'sendAnEmail', component: SendAnEmailToResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
