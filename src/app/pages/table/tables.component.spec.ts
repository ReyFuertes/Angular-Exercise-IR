import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablesComponent } from './tables.component';
import { CAMPAIGN_DATA } from 'src/app/campaign.mock';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  /* 
    Note:
    Why do we need unit test?
    1. In a use case when our application is receiving data from an api resource, we need to make sure we know what we are receiving,
    so we can display it properly in the template.
    2. Unit testing ensures the code feature you created works 100% as intended.
    3. Unit testing helps protect your code from lazy and complacent developers.
    
    Todo:
    1. We need to mock the getCampaign return value, todo that we will use jasmine returnValue..
    2. Use fixture testbed to check how many columns are displaying in the table template (e.g check the length)
  */

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesComponent],
    });
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
