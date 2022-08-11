import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitConfigsComponent } from './git-configs.component';

describe('GitConfigsComponent', () => {
  let component: GitConfigsComponent;
  let fixture: ComponentFixture<GitConfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitConfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
