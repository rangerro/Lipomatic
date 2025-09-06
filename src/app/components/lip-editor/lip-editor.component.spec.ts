import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipEditorComponent } from './lip-editor.component';

describe('LipEditorComponent', () => {
  let component: LipEditorComponent;
  let fixture: ComponentFixture<LipEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LipEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
