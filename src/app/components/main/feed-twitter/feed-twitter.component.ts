import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTweet, UserTwitter } from 'src/app/shared/models/user-twitter';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-feed-twitter',
  templateUrl: './feed-twitter.component.html',
  styleUrls: ['./feed-twitter.component.scss']
})
export class FeedTwitterComponent implements OnInit {

  dataTweet = new Date();

  @Output() displayTweet = new EventEmitter();

  subscription: Subscription;

  public newTweet: DataTweet[];
  public dataTwitter: UserTwitter;

  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.loadTweet();
  }

  loadTweet() {
    this.dataTwitter = this.userDataService.getUserDataTwitter();

    this.subscription = this.userDataService.getTweet().subscribe((x) => {
      if(x) {
        this.newTweet = x;
        this.displayTweet.emit(this.newTweet);
      }
      if(x == null || x.length == 0) {
        localStorage.removeItem("feed-tweet");
      };

    });
  }

  deleteTweet(tweet: DataTweet) {
    this.userDataService.deleteTweet(tweet);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
