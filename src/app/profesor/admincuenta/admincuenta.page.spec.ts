import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmincuentaPage } from './admincuenta.page';

describe('AdmincuentaPage', () => {
  let component: AdmincuentaPage;
  let fixture: ComponentFixture<AdmincuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmincuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
