import { Component, OnInit, OnDestroy } from '@angular/core';

import { Campaign } from 'src/app/model/data.model';
import { CampaignDataService } from 'src/app/data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  providers: [CampaignDataService],
})
export class TablesComponent implements OnInit, OnDestroy {
  dataSource: Campaign[] = [];
  unsubscribe$ = new Subject<void>();

  columnsDislplay = [
    'campaignName',
    'country',
    'conversions',
    'impressions',
    'rowRate',
    'totalSpent',
    'consConv',
    'startDate',
    'endDate',
  ];

  constructor(private campaignSvc: CampaignDataService) {}

  ngOnInit() {
    this.campaignSvc
      .getCampaign()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((campaign: Campaign[]) => {
        this.dataSource = campaign;
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
