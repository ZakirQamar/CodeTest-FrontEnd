import { Component, OnInit } from '@angular/core';
import { RedditService } from '../shared/reddit.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent implements OnInit {

  constructor(private service: RedditService) { }

  ngOnInit() {
    this.service.searchData = {
      SubReddit: 'Sweden',
      Limit: 10,
      Before: null,
      After: null
    };

    this.getList();
  }

  getList() {
    this.service.refereshList();
  }

}
