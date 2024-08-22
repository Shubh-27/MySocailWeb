import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'addfriend', component:FriendsComponent},
      { path: 'friendlist', component:FriendListComponent},
      { path: 'profile', component:ProfileComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
