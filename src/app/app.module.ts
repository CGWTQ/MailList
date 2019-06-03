import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingninComponent } from './singnin/singnin.component';
import { SingnupComponent } from './singnup/singnup.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SingninComponent,
    SingnupComponent,
    ContactListComponent,
    ContactNewComponent,
    ContactEditComponent,
    TagListComponent,
    TagNewComponent,
    TagEditComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
