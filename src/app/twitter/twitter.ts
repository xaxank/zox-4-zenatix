import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.html',
  styleUrls: ['./twitter.scss']
})
export class TwitterComponent implements OnInit {
  title = 'Twitter Board';

  postStats = []
  postId = 0;
  detailItem = {};
  filterQuery = {
    'source':''
  };
  ee
  group = {
    'source':''
  };
  act = 'eg';

  ngOnInit() {
    this.postStats = [
      {
        'postId': 1,
        'userName': 'Shibau',
        'handle': '@dogB',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'tweet': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'retweet': 3, 'comment': 5
      },
      {
        'postId': 2,
        'userName': 'Shiba',
        'handle': '@dogBrd',
        'tweet': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'retweet': 3, 'comment': 5
      },
      {
        'postId': 3,
        'userName': 'Shibu',
        'handle': '@doged',
        'tweet': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'retweet': 3, 'comment': 5
      },
      {
        'postId': 4,
        'userName': 'Shiba Inu',
        'handle': '@doged',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'tweet': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'retweet': 3, 'comment': 5
      },
      {
        'postId': 5,
        'userName': 'Shiba Inu',
        'handle': '@dreed',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'tweet': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'retweet': 3, 'comment': 5
      },
      {
        'postId': 6,
        'userName': 'Shiba',
        'handle': '@dBd',
        'tweet': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'retweet': 3, 'comment': 5
      },
    ]
  }

  showDetails(postId) {
    this.resetData();
    this.postId = postId;
    this.detailItem = this.postStats[postId-1];
  }

  resetData() {
    this.postId = 0;
    this.detailItem = {};
    this.filterQuery = {
      'source':''
    };
    this.group = {
      'source':''
    };    
  }

  createQuery() {
    this.resetData();
    this.filterQuery.source= 'Twitter';
  }

  manageGroup() {
    this.resetData();
    this.act = 'eg';
    this.group.source = 'Twitter';
  }

}
