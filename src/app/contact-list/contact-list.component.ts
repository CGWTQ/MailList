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
    this.http.get("http://localhost:3000/contacts")
    .toPromise()
    .then( data => {

      this.contacts = data;
 
    })
    .catch( err => {
      console.log(err.error);
      
    })
  }

}
