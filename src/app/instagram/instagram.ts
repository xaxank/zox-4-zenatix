import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { } from '@types/googlemaps';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { InstagramService } from '../instagram.service';

declare var google: any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.html',
  styleUrls: ['../app.component.scss'],
  providers: [InstagramService]
})
export class InstagramComponent implements OnInit {

  title = 'Instagram Board';
  @ViewChild('gmap') gmapElement: any;
  map: any;

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
  insights = false;

  constructor(
    private insta: InstagramService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(22, 80),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.insta.setHeaders(this.route.snapshot.fragment);
    this.getMediaData();
  }

  getMediaData() {
    this.insta.fetchData().subscribe(data => { this.postStats = data.data.splice(0,8) });
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
    this.insights = false;
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

  getInsights() {
    this.resetData();
    this.insights = true;


    this.postStats.forEach((post)=>{
      if(post.location)
      var marker = new google.maps.Marker({
        position: {lat:post.location.latitude,lng:post.location.longitude},
        map: this.map
      });
    });

  }

}
