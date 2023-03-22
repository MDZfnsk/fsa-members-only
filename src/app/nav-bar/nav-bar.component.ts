import { Component } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor (
    public auth: AngularFireAuth,
		private router: Router,
  ) {}

  onClickSignOut(): void {
		this.auth.signOut()
			.then(() => this.router.navigateByUrl('/sign-in'));
	}

}
