import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { InstagramService } from '../instagram.service';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.html',
  styleUrls: ['../app.component.scss'],
  providers: [InstagramService]
})
export class InstagramComponent implements OnInit {

  title = 'Instagram Board';

  postStats = []
  postId = 0;
  detailItem = {};
  filterQuery = {
    'source': ''
  };
  group = {
    'source': ''
  };
  act = 'eg';

  constructor(
    private insta: InstagramService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.insta.setHeaders(this.route.snapshot.fragment);
    this.getMediaData();
  }

  getMediaData() {
    this.insta.fetchData().subscribe(data => { this.postStats = data.data });
  }

  showDetails(postId) {
    this.resetData();
    this.postId = postId;
    this.detailItem = this.postStats.filter((a) => a.id == postId).map((a) => { a.created_time = new Date(a.created_time * 1000); return a; })[0];
  }

  resetData() {
    this.postId = 0;
    this.detailItem = {};
    this.filterQuery = {
      'source': ''
    };
    this.group = {
      'source': ''
    };
  }

  createQuery() {
    this.resetData();
    this.filterQuery.source = 'Instagram';
  }

  manageGroup() {
    this.resetData();
    this.act = 'eg';
    this.group.source = 'Instagram';
  }

}
