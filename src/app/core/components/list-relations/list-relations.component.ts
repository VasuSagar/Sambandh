import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import { FakeService } from '../../services/fake.service';

@Component({
  selector: 'app-list-relations',
  templateUrl: './list-relations.component.html',
  styleUrls: ['./list-relations.component.css']
})
export class ListRelationsComponent implements OnInit {
  dataSource: ArrayStore;
  @ViewChild(DxDiagramComponent, { static: false }) diagram: DxDiagramComponent;
  constructor(fakeService:FakeService) { 
    this.dataSource = new ArrayStore({
      key: 'ID',
      data:fakeService.getEmployees()
    });
  }

  ngOnInit(): void {
  }

  onNodeClick(e){
    console.log(e);
    console.log(this.diagram.instance.getItems());
     
  }

}
