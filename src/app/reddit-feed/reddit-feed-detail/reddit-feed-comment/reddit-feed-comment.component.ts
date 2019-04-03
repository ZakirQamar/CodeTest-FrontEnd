import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-reddit-feed-comment',
  templateUrl: './reddit-feed-comment.component.html',
  styleUrls: ['./reddit-feed-comment.component.css']
})
export class RedditFeedCommentComponent implements OnInit {
  @Input() comments;
  constructor(public util: UtilService) { }

  ngOnInit() {
  }
}
