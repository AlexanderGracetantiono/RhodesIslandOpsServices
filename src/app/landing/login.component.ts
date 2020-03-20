import { Component, OnInit,HostBinding } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    trigger('loading', [
      // ...
      state('unload', style({
        width: '100%',
      })),
      state('loaded', style({
        width: '0%',
      })),
      transition('unload => loaded', [
        animate('3s')
      ]),
    ]),
  ],
})
export class LoadComponent implements OnInit {
  isLoad = false;

  toggle() {
    this.isLoad = !this.isLoad;
  }
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    setTimeout(()=> {
      this.toggle();
  }, 0);
    // this.toggle();
  }

  login(): void {
    this.router.navigate(["/dashboard"]);
    // this.userService.login().subscribe(() => {
    //   if (this.userService.isLoggedIn) {
    //   }
    // });
  }
}
