import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';
import { Item } from '../interfaces/item';
import { INVOICE } from '../data/sampleInvoice';
@Injectable({
  providedIn: 'root'
})
export class GetItemListService {
  invoice=INVOICE;
  items=INVOICE.items;
  constructor() { }
  getInvoice():Invoice{
    return this.invoice;
  }
  getItems():Item[]{
    return this.items;
  }
}
