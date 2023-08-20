import { Observable, of } from 'rxjs';
import { Campaign } from './model/data.model';
import { CAMPAIGN_DATA } from './campaign.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class CampaignDataService {
  public getCampaign(): Observable<Campaign[]> {
    return of(CAMPAIGN_DATA);
  }
}
