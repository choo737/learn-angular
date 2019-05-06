import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeneratedFormComponent } from './generated-form/generated-form.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { FormGeneratorComponent } from './form-generator.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: '/assets', // configure base path for monaco editor
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

@NgModule({
  declarations: [
    GeneratedFormComponent,
    JsonEditorComponent,
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
