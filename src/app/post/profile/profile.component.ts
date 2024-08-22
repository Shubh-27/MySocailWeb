import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisplayPostService } from 'src/app/services/display-post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthService, private displayPost : DisplayPostService) { }
  data:any
  form = new FormGroup({
    postid : new FormControl(0,[Validators.required]),
    postText: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
    this.auth.checkLogout();
    this.displayPost.getMyPost(Number(localStorage.getItem('id'))).subscribe(dt=> {this.data = dt})
  }

  delete(postid : number){
    this.displayPost.deletePost(postid).subscribe(dt=>{
      if(dt)
        window.location.reload();
    })
  }

  edit(postid: number){
    var id = "editpostText-" + postid;
    var postText = (<HTMLInputElement>document.getElementById(id)).value;
    var data = {
      postid:postid,
      postText:postText
    }
    this.displayPost.editPost(data).subscribe(dt=>{
      if(dt)
        window.location.reload();
    })
  }
}
