import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css'],
  providers: [FormBuilder]
})
export class BootstrapComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }  
  
  categories :any[]=[
    {
      id: 1,
      name: "Mavi Yaka"
    },
    {
      id: 2,
      name: "Beyaz Yaka"
    }
  ] 

  personAddForm: FormGroup;

  createPersonAddForm() {
    this.personAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      surName: ["", Validators.required],
      email: ["", Validators.email],
      categoryId: ["", Validators.required]
    })
  }

  addPerson(){
    console.log("Created",this.personAddForm.value)
  }

  ngOnInit() {
    this.createPersonAddForm();
  }

}
