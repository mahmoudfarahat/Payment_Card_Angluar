import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  email:string = '';
  constructor() {

    // setInterval(()=>{
    //     this.email +='a'
    // },1000)
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.email)
  }
}
