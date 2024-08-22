import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DisplayPostService } from '../../services/display-post.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private auth: AuthService, private displayPost: DisplayPostService) { }
  data: any;
  ngOnInit(): void {
    this.auth.checkLogout();
    this.displayPost.getUsers(Number(localStorage.getItem('id'))).subscribe(dt => { this.data = dt })
  }

  accept(id: number) {
    this.displayPost.acceptFriend(Number(localStorage.getItem('id')), id).subscribe(dat => {
      if (dat)
        window.location.reload();
    })
  }

  send(id: number) {
    console.clear()
    console.log(Number(localStorage.getItem('id')))
    console.log(id)
    this.displayPost.addFriend(Number(localStorage.getItem('id')), id).subscribe(dat => {
      if (dat)
        window.location.reload();
    })
  }

  reject(id: number) {
    this.displayPost.rejectFriend(Number(localStorage.getItem('id')), id).subscribe(dat => {
      if (dat)
        window.location.reload();
    })
  }

  enter(id :any){
    (<HTMLButtonElement>document.getElementById('Button-' +id)).className = "button btn btn-outline-danger";
    (<HTMLButtonElement>document.getElementById('Button-' +id)).innerText = "Cancel";
  }

  leave(id :any){
    (<HTMLButtonElement>document.getElementById('Button-' +id)).className = "button btn btn-light";
    (<HTMLButtonElement>document.getElementById('Button-' +id)).innerText = "Pending";

  }
}
