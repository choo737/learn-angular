import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})

export class JsonEditorComponent implements OnInit {
  @Input('jsonString') code: string;
  @Output() jsonStringChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editorOptions = {theme: 'vs-dark', language: 'json'};

  onChange(newJSONString: string) {
    this.jsonStringChange.emit(newJSONString);
  }
}
