import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LogadminPage } from './logadmin.page';

describe('LogadminPage', () => {
  let component: LogadminPage;
  let fixture: ComponentFixture<LogadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
