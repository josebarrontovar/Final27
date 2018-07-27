import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemscontainerComponent } from './itemscontainer.component';

describe('ItemscontainerComponent', () => {
  let component: ItemscontainerComponent;
  let fixture: ComponentFixture<ItemscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
