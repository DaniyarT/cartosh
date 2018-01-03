import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehacksComponent } from './lifehacks.component';

describe('LifehacksComponent', () => {
  let component: LifehacksComponent;
  let fixture: ComponentFixture<LifehacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifehacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifehacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
