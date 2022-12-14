import { Component } from '@angular/core';
import { UserTwitter } from 'src/app/shared/models/user-twitter';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public data: UserTwitter;

  constructor(
    private userDataService: UserDataService
  ) {

  }

  ngOnInit(): void {
    this.data = this.userDataService.getUserDataTwitter();
  }


}
