import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperclipProducerComponent } from './paperclip-producer.component';

describe('PaperclipProducerComponent', () => {
  let component: PaperclipProducerComponent;
  let fixture: ComponentFixture<PaperclipProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperclipProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperclipProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
