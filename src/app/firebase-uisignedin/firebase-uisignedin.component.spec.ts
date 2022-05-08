import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseUisignedinComponent } from './firebase-uisignedin.component';

describe('FirebaseUisignedinComponent', () => {
  let component: FirebaseUisignedinComponent;
  let fixture: ComponentFixture<FirebaseUisignedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseUisignedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseUisignedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
