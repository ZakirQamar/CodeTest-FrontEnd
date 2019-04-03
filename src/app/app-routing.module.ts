import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditFeedComponent } from './reddit-feed/reddit-feed.component';
import { RedditFeedDetailComponent } from './reddit-feed/reddit-feed-detail/reddit-feed-detail.component';

const routes: Routes = [
  { path: '', component: RedditFeedComponent },
  { path: 'feed', component: RedditFeedComponent },
  { path: 'feed-details', component: RedditFeedDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
