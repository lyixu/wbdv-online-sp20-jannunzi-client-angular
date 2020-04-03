import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  currentUser = {
    username: ''
  }

  logout = () => {
    fetch('https://wbdv-online-sp20-server-node.herokuapp.com/api/logout', {
      method: 'POST',
      credentials: 'include'
    }).then(status => this.router.navigate(['']));
  }

  ngOnInit(): void {
    fetch('https://wbdv-online-sp20-server-node.herokuapp.com/api/currentUser', {
      method: 'POST',
      credentials: 'include'
    }).then(response => {
      console.log(response);
      return response.json();
    })
      .then(currentUser => {
        this.currentUser = currentUser;
      });
  }

}
