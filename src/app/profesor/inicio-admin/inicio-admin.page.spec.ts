import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAdminPage } from './inicio-admin.page';

describe('InicioAdminPage', () => {
  let component: InicioAdminPage;
  let fixture: ComponentFixture<InicioAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
