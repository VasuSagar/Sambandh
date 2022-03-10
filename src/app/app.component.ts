import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Customer, FakeService } from './core/services/fake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sambandh';
  customers: Customer[];

  constructor(service: FakeService) {
    this.customers = service.getCustomers();
  }
}
