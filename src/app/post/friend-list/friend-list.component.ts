import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { DisplayPostService } from 'src/app/services/display-post.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private auth:AuthService, private displayPost : DisplayPostService) { }
  data:any
  printData:any

  ngOnInit(): void {
    this.auth.checkLogout();
    this.displayPost.getFriends(Number(localStorage.getItem('id'))).subscribe(data=> {
      this.data =  data;
      console.log(this.data)
      this.printData = Object.entries(this.data); 
      console.log(this.printData)
    })
  }

  search(){
    var searchString = (<HTMLInputElement>document.getElementById('search')).value;
    console.log(searchString);
    this.printData = Object.entries(this.data);
    this.printData = this.printData.filter()
    console.log(this.printData)
  }
  

  remove(id: number) {
    // this.displayPost.rejectFriend(id,Number(localStorage.getItem('id'))).subscribe(dat => {
    //   if (dat)
    //     window.location.reload();
    // })
    console.log(id)
  }

}
