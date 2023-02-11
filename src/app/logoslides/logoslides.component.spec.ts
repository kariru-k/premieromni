import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoslidesComponent } from './logoslides.component';

describe('LogoslidesComponent', () => {
  let component: LogoslidesComponent;
  let fixture: ComponentFixture<LogoslidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoslidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoslidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
