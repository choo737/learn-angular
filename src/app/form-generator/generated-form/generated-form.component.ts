import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'generated-form',
  templateUrl: './generated-form.component.html',
  styleUrls: ['./generated-form.component.scss']
})
export class GeneratedFormComponent implements OnInit {
  @Input('jsonString') code: string;
  constructor() { }

  ngOnInit() {
  }



}
