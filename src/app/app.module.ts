import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditFeedComponent } from './reddit-feed/reddit-feed.component';
import { RedditFeedListComponent } from './reddit-feed/reddit-feed-list/reddit-feed-list.component';
import { RedditFeedCommentComponent } from './reddit-feed/reddit-feed-detail/reddit-feed-comment/reddit-feed-comment.component';
import { RedditService } from './shared/reddit.service';
import { HttpClientModule } from '@angular/common/http';
import { RedditFeedDetailComponent } from './reddit-feed/reddit-feed-detail/reddit-feed-detail.component';
import { UtilService } from './shared/util.service';

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedComponent,
    RedditFeedListComponent,
    RedditFeedCommentComponent,
    RedditFeedDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RedditService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
