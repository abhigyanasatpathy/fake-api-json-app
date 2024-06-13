import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FakeapiserviceService } from 'src/app/services/fakeapiservice.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  exampleForm: FormGroup;
  savePosts: any[] = [];

  constructor(private fb: FormBuilder, private fakeApiService:FakeapiserviceService) {
    this.exampleForm = this.fb.group({
      userId: [''],
      id: [''],
      title: ['', Validators.required],
      body:['',Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.exampleForm.valid) {
      this.fakeApiService.createPost(this.exampleForm.value).subscribe(
        response => {
          console.log('Post created successfully', response);
          this.savePostLocalstorage(response);
          // Handle successful response
        },
        error => {
          console.error('Error creating post', error);
          // Handle error response
        }
      );
    }
  }

  onReset() {
    this.exampleForm.reset();
  }
savePostLocalstorage(post:any){
  this.savePosts.push(post);
  localStorage.setItem('savePosts',JSON.stringify(this.savePosts));
}
loadPostFromLocalstorage(){
  const savePosts = localStorage.getItem('savePosts');
  if (savePosts){
    this.savePosts = JSON.parse(savePosts);
  }
}
}
