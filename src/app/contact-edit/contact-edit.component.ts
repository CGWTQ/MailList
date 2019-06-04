import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {


  formData = {
    name:'',
    email:'',
    phone:'',
    id:0
  }

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    //获取路径中的参数
    const contactId = this.activatedRoute.snapshot.params.id;
    this.getContactId(contactId)
    
  }

  getContactId(id){
    this.http.get(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then( (data:any) => {
      this.formData = data
    } )
    .catch( err => {
      window.alert("编辑失败，请稍后重试！")
    } )
  }

  //保存编辑数据
  saveContact(){
    const editData = this.formData;
    const id = this.formData.id;
    if( !window.confirm("是否确定修改？") ){
      return 
    }
    this.http.patch(`http://localhost:3000/contacts/${id}`,editData)
    .toPromise()
    .then( data => {
      window.alert("保存成功");
      this.router.navigate(['/contact'])
    } )
    .catch( err => {
      window.alert("保存失败，请稍后重试！");
    } )
  }

}
