import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/shared/reddit.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-reddit-feed-detail',
  templateUrl: './reddit-feed-detail.component.html',
  styleUrls: ['./reddit-feed-detail.component.css']
})
export class RedditFeedDetailComponent implements OnInit {

  constructor(private service: RedditService, private router: Router, private util: UtilService) { }

  ngOnInit() {
    if (!this.service.feedDetail) {
      this.router.navigateByUrl('feed');
    }

    this.service.getDetails();
  }

}
