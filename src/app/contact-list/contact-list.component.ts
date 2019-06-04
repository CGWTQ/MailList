import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient,  HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts : any

  constructor(
    private http : HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.getContact()
  }

  //新增联系人请求

  getContact(){
    this.http.get("http://localhost:3000/contacts")
    .toPromise()
    .then( data => {

      this.contacts = data;

    })
    .catch( err => {
      console.log(err.error); 
    })
  }

  //编辑请求
  editContact(){

  }

  //删除请求
  delete(id){
    if( !window.confirm("您确定删除吗？") ){
      return
    }
    this.http.delete(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then( data => {
      this.getContact()
    } )
    .catch( err => {
      window.alert("删除失败，请稍后重试！")
    } )
    
  }

}
