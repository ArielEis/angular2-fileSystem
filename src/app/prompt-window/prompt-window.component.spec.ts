import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptWindowComponent } from './prompt-window.component';

describe('PromptWindowComponent', () => {
  let component: PromptWindowComponent;
  let fixture: ComponentFixture<PromptWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
