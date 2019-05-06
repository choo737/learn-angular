import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jsonString = JSON.stringify({
    name: "My workflow",
    fields: []
  }, null, 2)
}
