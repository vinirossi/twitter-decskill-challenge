import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { DataTweet, UserTwitter } from 'src/app/shared/models/user-twitter';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public newTweet: DataTweet[] = [];

  public dataTwitter: UserTwitter;

  public formTwitter: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.dataTwitter = this.userDataService.getUserDataTwitter();
    this.sendTweet();

  }

  sendTweet(){
    this.formTwitter = this.formBuilder.group({
      tweet: ['', [Validators.required, Validators.maxLength(130)]],
    });
  }

  onSubmit(){
    const textTweet = this.formTwitter.controls['tweet'].value;
    let feedTweet = new DataTweet();
    let id = Math.floor(Math.random() * 100);
    if(this.newTweet.length >= 1){
      let verifyId = this.newTweet.find(x =>
        x.id == id
      )
      if(verifyId){
        id = Math.floor(Math.random() * 100);
      }
    };

    feedTweet.id = id;
    feedTweet.tweet = textTweet;

    this.newTweet.unshift(feedTweet);
    localStorage.setItem("feed-tweet", JSON.stringify(this.newTweet));
    this.userDataService.setTweet(this.newTweet);
    this.formTwitter.reset();
  }



}
