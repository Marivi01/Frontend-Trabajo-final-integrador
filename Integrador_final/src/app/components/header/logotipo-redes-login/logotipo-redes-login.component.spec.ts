import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoRedesLoginComponent } from './logotipo-redes-login.component';

describe('LogotipoRedesLoginComponent', () => {
  let component: LogotipoRedesLoginComponent;
  let fixture: ComponentFixture<LogotipoRedesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogotipoRedesLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotipoRedesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
