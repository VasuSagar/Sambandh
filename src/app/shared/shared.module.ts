import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxDiagramModule, DxPopupModule, DxTemplateModule, DxTextBoxModule, DxValidationGroupModule, DxValidatorModule } from 'devextreme-angular';
import { DxoAutoLayoutModule, DxoEdgesModule, DxoGroupComponent, DxoGroupModule, DxoNodeModule, DxoToolboxModule } from 'devextreme-angular/ui/nested';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    DxDiagramModule,
    DxoGroupModule,
    DxoToolboxModule,
    DxoEdgesModule,
    DxoNodeModule,
    DxoAutoLayoutModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxPopupModule,
    DxTextBoxModule,
    ReactiveFormsModule,
    DxValidationGroupModule,
    DxValidatorModule,
    FormsModule
  ]
})
export class SharedModule { }
