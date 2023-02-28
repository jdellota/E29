import { Component } from '@angular/core';
import { GetItemListService } from 'src/app/services/get-item-list.service';
import { Item } from 'src/app/interfaces/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  
  constructor(private getItemlist:GetItemListService){}
  items=this.getItemlist.getItems();
  total:number=0;
  totalPrice(item:Item):number{
    return item.price*item.qty;
  }
  getTotal(){
    this.items.forEach(item => {
      this.total+=item.price*item.qty
    });
  }
}
