import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.html',
  styleUrls: ['./facebook.scss']
})

export class FacebookComponent implements OnInit {

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
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'content': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'share': 3, 'comment': 5
      },
      {
        'postId': 1,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'content': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'share': 3, 'comment': 5
      },
      {
        'postId': 1,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'content': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'share': 3, 'comment': 5
      },
      {
        'postId': 1,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'content': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'share': 3, 'comment': 5
      },
      {
        'postId': 1,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'content': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'share': 3, 'comment': 5
      },
      {
        'postId': 1,
        'userName': 'Shiba Inu',
        'type': 'Dog Breed',
        'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        'content': ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        'tags': ['dog', 'japan', 'hunting', 'spitz', 'agile', 'mountians'],
        'like': 15, 'share': 3, 'comment': 5
      },
    ]
  }

  showDetails(postId) {
    this.resetData();
    this.postId = postId;
    this.detailItem = this.postStats[postId];
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
    this.filterQuery.source= 'Facebook';
  }

  manageGroup() {
    this.resetData();
    this.act = 'eg';
    this.group.source = 'Facebook';
  }

}
