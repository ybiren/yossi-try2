import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-temp',
  templateUrl: './form-temp.component.html',
  styleUrls: ['./form-temp.component.scss']
})
export class FormTempComponent implements OnInit {

  public model = {'name': 'shlomi','email':'a@b.c'};
  public arr = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

  submit() {
    alert("submitted");
  }


}
