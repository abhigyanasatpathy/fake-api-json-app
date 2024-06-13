import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { UserInfoRoutingModule } from './user-info-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [UserInfoComponent]
})
export class UserInfoModule { }
