import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHerosComponent } from './dc-heros.component';

describe('DcHerosComponent', () => {
  let component: DcHerosComponent;
  let fixture: ComponentFixture<DcHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
