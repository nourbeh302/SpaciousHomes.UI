import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorporationComponent } from './create-corporation.component';

describe('CreateCorporationComponent', () => {
  let component: CreateCorporationComponent;
  let fixture: ComponentFixture<CreateCorporationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorporationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
