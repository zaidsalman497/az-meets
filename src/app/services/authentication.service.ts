import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut, User } from 'firebase/auth';
import { Observable } from 'rxjs';
declare var setCookeeValue: any;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<User> | undefined; 
 

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  // This method is not in use as Firebaseui-angular handles the sign in
  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithRedirect(auth, provider);
  }

  async signOut() {
    await this.afAuth.signOut();
    setCookeeValue('loggedInUser', '', 0);
    setCookeeValue('loggedInUserName', '', 0);
    setCookeeValue('loggedInUserImgUrl', '', 0);
  }

  async onSuccessLogin(email: any, displayName: any, user?: any, photoURL?: any, phonenumber?: any): Promise<void> {
    setCookeeValue('loggedInUser', email, 2);
    setCookeeValue('loggedInUserName', displayName ||  'Guest' ,2);
    setCookeeValue('loggedInUserImgUrl', photoURL || '../../favicon.ico', 2);
    if (user) {
      console.log('welcome', user.displayName);
  
    } 
    this.router.navigate(['loggedin']);
  }

}