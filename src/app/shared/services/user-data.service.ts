import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataTweet, UserTwitter } from '../models/user-twitter';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData: UserTwitter;
  private tweetSubject$ = new BehaviorSubject<any>(null);

  constructor() { }

  getUserDataTwitter(){
    this.userData = {
      fullName: 'Decskill',
      userName: '@decskill',
      photoProfile: '../../../assets/images/profile.jpg'
    }
    return this.userData
  }

  setTweet(tweet: DataTweet[]) {
    this.tweetSubject$.next(tweet);
  }

  getTweet() {
    return this.tweetSubject$.asObservable();
  }

  deleteTweet(tweet: DataTweet){
    const tweetStorage = JSON.parse(localStorage.getItem('feed-tweet')!) || []
    let index = tweetStorage.findIndex((x : DataTweet) => x.id === tweet.id);
    tweetStorage.splice(index, 1);
    localStorage.setItem("feed-tweet", JSON.stringify(tweetStorage));

    this.tweetSubject$.next(tweetStorage);
  }



}
