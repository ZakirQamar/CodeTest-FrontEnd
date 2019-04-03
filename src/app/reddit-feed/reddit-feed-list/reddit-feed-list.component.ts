import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/shared/reddit.service';
import { UtilService } from 'src/app/shared/util.service';
import { FeedDetail } from 'src/app/shared/feed-detail.model';
import { Router } from '@angular/router';
import { utils } from 'protractor';

@Component({
  selector: 'app-reddit-feed-list',
  templateUrl: './reddit-feed-list.component.html',
  styleUrls: ['./reddit-feed-list.component.css']
})
export class RedditFeedListComponent implements OnInit {

  constructor(public service: RedditService, public util: UtilService, public router: Router) { }

  ngOnInit() {
  }

  gotoDetail(obj: FeedDetail) {
    this.service.feedDetail = obj;
    this.router.navigateByUrl('feed-details');
  }
}
