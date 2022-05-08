import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

@Component({
  selector: 'app-firebase-uisignedin',
  templateUrl: './firebase-uisignedin.component.html',
  styleUrls: ['./firebase-uisignedin.component.css']
})
export class FirebaseUisignedinComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  successCallback(
    signInSuccessData: FirebaseUISignInSuccessWithAuthResult
  ): void {
    this.authService.onSuccessLogin(
      signInSuccessData.authResult.user?.email,
      signInSuccessData.authResult.user?.displayName,
      signInSuccessData.authResult.user,
      signInSuccessData.authResult.user?.photoURL
    );
  }

  errorCallback(errorData: FirebaseUISignInFailure): void {
    console.error('FirebaseUiSignupComponent>errorCallback', errorData);
  }

  uiShownCallback(): void {
    console.log('FirebaseUiSignupComponent>uiShownCallback');
  }

}
