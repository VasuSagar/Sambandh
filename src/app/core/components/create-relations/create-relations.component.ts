import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-relations',
  templateUrl: './create-relations.component.html',
  styleUrls: ['./create-relations.component.css']
})
export class CreateRelationsComponent implements OnInit {
  popupVisible:boolean=false;
  selfNodeForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.selfNodeForm=this.fb.group({
      fullName:""
    });
  }

  addSelfNode(){
    this.popupVisible=true;
  }

  addRelativesNode(){
    this.popupVisible=true;
  }

  onSubmit(){
    console.log(this.selfNodeForm.value);
     
  }

}
