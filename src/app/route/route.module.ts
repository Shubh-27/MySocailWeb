import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { PostRoutingModule } from '../post/post-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouteRoutingModule,
    PostRoutingModule
  ]
})
export class RouteModule { }
