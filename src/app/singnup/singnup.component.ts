import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {

  signupFrom = {
    email:"",
    password:""
  }

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
  }
  singnup(){
    const formData = this.signupFrom;
    this.http.post('http://localhost:3000/users', formData)
      .toPromise().then((data: any) => {
        
        window.localStorage.setItem("auth_token",data.token)  //存储用户识别码
        window.localStorage.setItem("user_info",JSON.stringify(data.user))  //存储用户名
        this.router.navigate(["/"])
      }).catch((error) => {
        if(error.status === 409){
          window.alert("邮箱被占用");
        }
      })

  }

}
