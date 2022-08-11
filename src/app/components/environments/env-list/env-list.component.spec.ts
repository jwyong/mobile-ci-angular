import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvListComponent } from './env-list.component';

describe('EnvListComponent', () => {
  let component: EnvListComponent;
  let fixture: ComponentFixture<EnvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
