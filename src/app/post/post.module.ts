import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PostComponent,
    HomeComponent,
    FriendsComponent,
    FriendListComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostModule { }
