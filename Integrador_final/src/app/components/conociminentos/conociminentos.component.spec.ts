import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConociminentosComponent } from './conociminentos.component';

describe('ConociminentosComponent', () => {
  let component: ConociminentosComponent;
  let fixture: ComponentFixture<ConociminentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConociminentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConociminentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
