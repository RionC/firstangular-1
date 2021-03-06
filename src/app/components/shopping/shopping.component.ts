import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


  info = 'Your Shopping List';
  items: ShoppingItem[] = [
    { description: 'Shampoo', purchased: false },
    { description: 'Beer', purchased: true },
    { description: 'More beer', purchased: false }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(itemEl: HTMLInputElement): void {
    console.log(itemEl);
    const itemToAdd: ShoppingItem = {
      description: itemEl.value,
      purchased: false
    };
    this.items = [itemToAdd, ...this.items];
    itemEl.value = '';
    itemEl.focus();
  }

  markPurchased(item: ShoppingItem): void {
    item.purchased = true;
  }
}
