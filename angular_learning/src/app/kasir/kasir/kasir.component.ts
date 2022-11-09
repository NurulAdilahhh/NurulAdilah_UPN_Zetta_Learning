
import { Component, OnInit } from '@angular/core';
export interface Item {id : number , name : string , Price : number}
export interface SelectedItem {id : number , name : string , Price : number, amount : number}


@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})


export class KasirComponent implements OnInit {
  
  public items: Item[]= [
    {id : 1 , name : 'Calamari Roll', Price: 65000},
    {id : 2 , name : 'Salmon Brulee', Price: 45000},
    {id : 3 , name : 'Sushi Ichimura', Price: 70000},
    {id : 4 , name : 'Tori Kawa Sushi', Price: 31000},
    {id : 5 , name : 'California Roll', Price: 52000},
    {id : 6 , name : 'Fish Cake Roll', Price: 38000},
    {id : 7 , name : 'Cranberry Smoothies', Price: 16000},
    {id : 8 , name : 'Starfruit Juice', Price: 19000},
    {id : 9 , name : 'Lemonade lemon', Price: 15000},
    {id : 10 , name : 'Hazelnute Choco', Price: 20000},
  ]
  public selectedItems: SelectedItem[] = []


  constructor() { }

  ngOnInit(): void {
  }


  addItem(item :Item){
    const duplicated =this.selectedItems.findIndex(({id})   =>id=== item.id)
  addItem(item : item){
    const duplicated =this.selectedItems.findIndex(({id}) =>id=== item.id)


    if(duplicated>=0){
      this.selectedItems[duplicated].amount +=1
    }
    else{
      this.selectedItems.push({...item, amount: 1})
    }


  }
    }
  



