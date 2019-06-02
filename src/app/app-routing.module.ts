import { NgModule, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'

import { SingninComponent } from './singnin/singnin.component'
import { SingnupComponent } from './singnup/singnup.component'
import { LayoutComponent } from './layout/layout.component'
import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactNewComponent } from './contact-new/contact-new.component'
import { ContactEditComponent } from './contact-edit/contact-edit.component'
import { TagListComponent } from './tag-list/tag-list.component'
import { TagNewComponent } from './tag-new/tag-new.component'
import { TagEditComponent } from './tag-edit/tag-edit.component'


const routes:Routes=[
  {
    path:"signin",
    component:SingninComponent
  },
  {
    path:"contact",
    component:LayoutComponent,
    children:[
      {
        path:"",
        component:ContactListComponent
      },
      {
        path:"new",
        component:ContactNewComponent
      },
      {
        path:"edit",
        component:ContactEditComponent
      }    
    ]
  },
  {
    path:"tags",
    component:LayoutComponent,
    children:[
      {
        path:"",
        component:TagListComponent
      },
      {
        path:"new",
        component:TagNewComponent
      },
      {
        path:"edit",
        component:TagEditComponent
      }    
    ]
  },
  {
    path:"signup",
    component:SingnupComponent
  },
  {
    path:'',
    redirectTo:'/contact',  //跳转到该路径
    pathMatch:"full"
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
