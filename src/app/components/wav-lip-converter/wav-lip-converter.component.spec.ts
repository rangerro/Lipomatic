import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavLipConverterComponent } from './wav-lip-converter.component';

describe('WavLipConverterComponent', () => {
  let component: WavLipConverterComponent;
  let fixture: ComponentFixture<WavLipConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavLipConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WavLipConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
