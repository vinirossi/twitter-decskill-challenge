import { Component, OnInit } from '@angular/core';
import { UserTwitter } from 'src/app/shared/models/user-twitter';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public data: UserTwitter;

  constructor(
    private userDataService: UserDataService
  ) {

  }

  ngOnInit(): void {
    this.data = this.userDataService.getUserDataTwitter();
  }

}
