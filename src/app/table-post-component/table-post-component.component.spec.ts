import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePostComponentComponent } from './table-post-component.component';

describe('TablePostComponentComponent', () => {
  let component: TablePostComponentComponent;
  let fixture: ComponentFixture<TablePostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
