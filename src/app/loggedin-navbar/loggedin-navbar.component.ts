import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-loggedin-navbar',
  templateUrl: './loggedin-navbar.component.html',
  styleUrls: ['./loggedin-navbar.component.css']
})
export class LoggedinNavbarComponent implements OnInit {

  constructor(public auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

}
