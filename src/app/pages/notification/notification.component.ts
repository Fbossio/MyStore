import { Component, OnInit } from '@angular/core';
import { IBillingInfo } from '../../models/billingInfo';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  billingInfo: IBillingInfo | null = null;
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.billingInfo = this.notificationService.getBillingInfo();
  }
}
