import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { InstagramComponent } from './instagram/instagram';
import { TwitterComponent } from './twitter/twitter';

const routes: Routes = [
    { path : '', redirectTo : 'dashboard', pathMatch : 'full' },
    { path : 'dashboard', component : DashboardComponent  },
    { path : 'instagram', component : InstagramComponent  },
    { path : 'twitter', component : TwitterComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
