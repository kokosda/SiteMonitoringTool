import { WebSiteStatusesService } from './../services/web-site-statuses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websitestatuses-form',
  templateUrl: './web-site-statuses.component.html',
  styleUrls: ['./web-site-statuses.component.css']
})
export class WebSiteStatusesComponent implements OnInit {
  protected webSiteStatusesService: WebSiteStatusesService;
  private isLoading: boolean;
  private webSiteStatuses: any[];

  constructor(webSiteStatusesService: WebSiteStatusesService) { 
    this.webSiteStatusesService = webSiteStatusesService;
    this.isLoading = true;
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.webSiteStatusesService.get().subscribe(wss => {
      console.log("WEBSITESTATUSES", wss);
      this.isLoading = false;
      this.webSiteStatuses = wss;
    });
  }
}
