import { Component } from '@angular/core';
import { GetItemListService } from 'src/app/services/get-item-list.service';
import { Invoice } from 'src/app/interfaces/invoice';
import { Item } from 'src/app/interfaces/item';
@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent {
  constructor(private getItemlist:GetItemListService){}
  invoice=this.getItemlist.getInvoice();
  
}
