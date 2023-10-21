import { Injectable } from '@angular/core';
import { IBillingInfo } from '../models/billingInfo';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private billingInfo: IBillingInfo | null = null;

  setBillingInfo(billingInfo: IBillingInfo) {
    this.billingInfo = billingInfo;
  }

  getBillingInfo(): IBillingInfo | null {
    return this.billingInfo;
  }
}
