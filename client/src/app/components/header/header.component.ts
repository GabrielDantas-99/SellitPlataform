import { Component, Input } from "@angular/core";
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  @Input() pageTitle?: String = "";
  @Input() previousRoute?: String = "";
  @Input() imgPerfil?: string = null;
  @Input() cartCount?: number = 0;
}
