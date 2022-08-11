import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticConfigsComponent } from './static-configs.component';

describe('StaticConfigsComponent', () => {
  let component: StaticConfigsComponent;
  let fixture: ComponentFixture<StaticConfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticConfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
