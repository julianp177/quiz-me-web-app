import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPoolComponent } from './question-pool.component';

describe('QuestionPoolComponent', () => {
  let component: QuestionPoolComponent;
  let fixture: ComponentFixture<QuestionPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionPoolComponent]
    });
    fixture = TestBed.createComponent(QuestionPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
