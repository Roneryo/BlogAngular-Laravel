import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  defaultUserIcon: string = 'https://avatars.dicebear.com/api/gridy/user_unavailable.svg';
  defaultUserBackground: string = 'https://picsum.photos/seed/picsum/400/300';
  admin: boolean = false;
  logged: boolean = false;
  M:any;
  constructor() {

  }

  ngOnInit(): void {
    M.AutoInit();
  }

}
