import { Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { AuthGuard } from "./services/auth-guard.service";
import { ShopComponent } from "./pages/shop/shop.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "shop",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "shop",
    component: ShopComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
    canActivate: [AuthGuard],
  },
];
