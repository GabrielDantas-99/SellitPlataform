import { Component, Input } from "@angular/core";
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LoginResponse } from "../../types/login-response.dto";
import { AuthService } from "../../services/auth.service";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgIf,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  @Input() pageTitle?: String = "";
  @Input() previousRoute?: String = "";
  @Input() imgPerfil?: string = null;
  @Input() cartCount?: number = 0;

  user: LoginResponse = null;

  constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }

  logout() {
    this.authService.logout();
  }
}
