import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import {AuthenticationService} from "../authentication.service";

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService:AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[AuthenticationService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert "checkAuthentication" has been called', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

});
