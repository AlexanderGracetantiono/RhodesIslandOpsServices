import { Component, OnInit } from "@angular/core";
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
    trigger('fadeImage', [
      // ...
      state('original', style({
        opacity: 1,
      })),
      state('fade', style({
        opacity: 0,
      })),
      transition('original => fade', [
        animate('3s')
      ]),
      transition('fade => original', [
        animate('3s')
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errMess: string;
  isLoad = false;
  isFade = false;
  isDoneFade = false;

  toggle() {
    this.isLoad = !this.isLoad;
  }
  faded() {
    this.isFade = !this.isFade;
  }
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggle();
    }, 0);
    setTimeout(() => {
      this.faded();
    }, 4000);
    // setTimeout(() => {
    //   this.isDoneFade = true;
    // }, 0);
  }

  login(): void {
    if (this.username == "Alexander") {
      if (this.password == "12345") {
        this.router.navigate(["/dashboard"]);
      } else {
        this.errMess = "Password Salah"
      }
    } else {
      this.errMess = "User Name Tidak Terdaftar"
    }
    // this.userService.login().subscribe(() => {
    //   if (this.userService.isLoggedIn) {
    //     this.router.navigate(["/dashboard"]);
    //   }
    // });
  }
}
