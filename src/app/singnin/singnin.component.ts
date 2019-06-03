import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-singnin',
  templateUrl: './singnin.component.html',
  styleUrls: ['./singnin.component.css']
})
export class SingninComponent implements OnInit {

  signinFrom = {
    email: "",
    password: ""
  }

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
  }


  singnin() {
    const formData = this.signinFrom;
    this.http.post('http://localhost:3000/session',formData)
    .toPromise()
    .then( (data : any) => {
      window.localStorage.setItem("auth_token",data.token)  //存储用户识别码
      window.localStorage.setItem("user_info",JSON.stringify(data.user))  //存储用户名
      this.router.navigate(['/contact'])
    } )
    .catch((err) => {
      window.alert("密码或邮箱错误");
    })   
  }
}
