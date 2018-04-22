import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])]
    })
  }



  ngOnInit() {
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

}
