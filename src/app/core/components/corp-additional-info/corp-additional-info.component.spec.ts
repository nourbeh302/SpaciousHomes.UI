import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpAdditionalInfoComponent } from './corp-additional-info.component';

describe('CorpAdditionalInfoComponent', () => {
  let component: CorpAdditionalInfoComponent;
  let fixture: ComponentFixture<CorpAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpAdditionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
