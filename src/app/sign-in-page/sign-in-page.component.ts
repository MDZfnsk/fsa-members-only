import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CONSTANTS } from '@firebase/util';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  errorMessage = '';
  emailValue = '';
  passwordValue = '';

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    //Used for understanding purposes
    // this.auth.user.subscribe(user => {
    //   if(user){
    //     console.log("Yes");

    //   }
    //   else{
    //     console.log("No");
    //   }
    // }
    //   )
   
  }

  onClickSignIn(): void {
    this.errorMessage = '';
    this.auth.signInWithEmailAndPassword(this.emailValue, this.passwordValue)
      .then(() => this.router.navigateByUrl('/'))
      .catch(e => this.errorMessage = e.message);
  }

}
