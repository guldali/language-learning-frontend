import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgressComponent } from './user-progress.component';

describe('UserProgressComponent', () => {
  let component: UserProgressComponent;
  let fixture: ComponentFixture<UserProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProgressComponent]
    });
    fixture = TestBed.createComponent(UserProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
