import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(window.localStorage.getItem("user_info") || "{}" )

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
  }
  exit(){
    this.http.delete('http://localhost:3000/session')
    .toPromise()
    .then( data => {
      window.localStorage.removeItem("user_info");
      window.localStorage.removeItem("auth_token");   //清除本地记录
      this.router.navigate(["/signin"])
    } )
    .catch( err => {
      window.alert("退出失败，请稍后重试");
    } )
  }

}
