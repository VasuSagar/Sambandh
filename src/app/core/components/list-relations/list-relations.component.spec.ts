import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelationsComponent } from './list-relations.component';

describe('ListRelationsComponent', () => {
  let component: ListRelationsComponent;
  let fixture: ComponentFixture<ListRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRelationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
