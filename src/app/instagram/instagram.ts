import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.html',
  styleUrls: ['../app.component.scss']
})
export class InstagramComponent implements OnInit {

  title = 'Instagram Board';

  postStats = []
  postId = 0;
  detailItem = {};
  filterQuery = {
    'source':''
  };
  group = {
    'source':''
  };
  act = 'eg';

  ngOnInit() {
    this.postStats = [
      {
        'postId': 1,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'followers': '20k',
        'following': '1.5k',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'caption': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'dogsofinstagram','dogsofjapan','petsoninstagram','moretags'],
        'like': 15, 'repost': 3, 'comment': 5
      },
      {
        'postId': 2,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'followers': '20k',
        'following': '1.5k',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'caption': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'dogsofinstagram','dogsofjapan','petsoninstagram','moretags'],
        'like': 15, 'repost': 3, 'comment': 5
      },
      {
        'postId': 3,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'followers': '20k',
        'following': '1.5k',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'caption': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'dogsofinstagram','dogsofjapan','petsoninstagram','moretags'],
        'like': 15, 'repost': 3, 'comment': 5
      },
      {
        'postId': 4,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'followers': '20k',
        'following': '1.5k',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'caption': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'dogsofinstagram','dogsofjapan','petsoninstagram','moretags'],
        'like': 15, 'repost': 3, 'comment': 5
      },
      {
        'postId': 5,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'followers': '20k',
        'following': '1.5k',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'caption': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'dogsofinstagram','dogsofjapan','petsoninstagram','moretags'],
        'like': 15, 'repost': 3, 'comment': 5
      },
      {
        'postId': 6,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'followers': '20k',
        'following': '1.5k',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'caption': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'dogsofinstagram','dogsofjapan','petsoninstagram','moretags'],
        'like': 15, 'repost': 3, 'comment': 5
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
    this.filterQuery.source= 'Instagram';
  }

  manageGroup() {
    this.resetData();
    this.act = 'eg';
    this.group.source = 'Instagram';
  }

}
