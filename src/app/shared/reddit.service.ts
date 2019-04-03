import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchDetail } from './search-detail.model';
import { FeedDetail } from './feed-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  feedList: FeedDetail[];
  feedDetail: FeedDetail;
  feedCommentList = [];
  searchData: SearchDetail;
  firstObjId = '';
  readonly rootURL = 'https://www.reddit.com/r/';
  readonly commentURL = 'https://www.reddit.com/r/sweden/comments/';

  constructor(private http: HttpClient) { }

  refereshList(url?: string, isNav?: boolean) {
    if (!url) {
      url = this.getUrl();
    }

    return this.http.get(url).toPromise().then(
     (res: any) => {
        console.log(res);

        this.prepareFeeds(res.data.children);
        // by default service returns 2 extra object in array list
        if (this.feedList.length > this.searchData.Limit) {
          this.feedList = this.feedList.slice(0,  this.searchData.Limit);
        }

        // reset data
        this.searchData.Before = null;
        this.searchData.After = null;

        // hold first object id
        if (!isNav) {
          this.firstObjId = this.feedList[0].name;
        }

        // handle navigation
        this.handleNavigation(isNav);

      },
      err => {
        this.feedList = []; // reset data
        console.log(err);
      }
    );
  }

  getNextList() {
    let url = this.getUrl();
    if (this.searchData.After) {
      url = url + '&after=' + this.searchData.After;
    }

    this.refereshList(url, true);
  }

  getPreviousList() {
    let url = this.getUrl();
    if (this.searchData.Before) {
      url = url + '&before=' + this.searchData.Before;
    }

    this.refereshList(url, true);
  }

  getUrl() {
    return this.rootURL + this.searchData.SubReddit + '.json?limit=' + this.searchData.Limit;
  }

  handleNavigation(isNav: boolean) {
    // service does not return correct before and after data, so handling manualy
    if (this.feedList.length > 0) {
      // check whether nvigation has been called or not
      if (isNav && this.feedList[0].name !== this.firstObjId) {
        this.searchData.Before = this.feedList[0].name;
      }

      if (this.feedList.length = this.searchData.Limit) {
        this.searchData.After = this.feedList[this.searchData.Limit - 1].name;
      }
    }
  }

  getDetails() {
    const url = this.commentURL + this.feedDetail.id + '/' + this.feedDetail.title + '.json';

    return this.http.get(url).toPromise().then(
      (res: any) => {
         console.log(res[1].data.children);
         this.feedCommentList = res[1].data.children;
       },
       err => { console.log(err); }
     );
  }

  prepareFeeds(feedList) {
    this.feedList = [];

    feedList.forEach((feed: any) => {
      const objFeed = {} as FeedDetail;
      objFeed.author = feed.data.author;
      objFeed.author_flair_text = feed.data.author_flair_text;
      objFeed.created = feed.data.created;
      objFeed.num_comments = feed.data.num_comments;
      objFeed.score = feed.data.score;
      objFeed.title = feed.data.title;
      objFeed.name = feed.data.name;
      objFeed.id = feed.data.id;
      objFeed.selftext_html = feed.data.selftext_html;
      objFeed.thumbnail = feed.data.thumbnail;

      this.feedList.push(objFeed);
    });

    console.log(this.feedList);
  }
}
