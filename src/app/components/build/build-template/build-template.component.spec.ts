import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTemplateComponent } from './build-template.component';

describe('BuildTemplateComponent', () => {
  let component: BuildTemplateComponent;
  let fixture: ComponentFixture<BuildTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
