import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class BlogModule { }
