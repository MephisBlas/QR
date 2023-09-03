import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioadmiinPage } from './horarioadmiin.page';

describe('HorarioadmiinPage', () => {
  let component: HorarioadmiinPage;
  let fixture: ComponentFixture<HorarioadmiinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorarioadmiinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
