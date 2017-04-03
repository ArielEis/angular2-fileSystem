import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserTreeComponent } from './browser-tree.component';

describe('BrowserTreeComponent', () => {
  let component: BrowserTreeComponent;
  let fixture: ComponentFixture<BrowserTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
