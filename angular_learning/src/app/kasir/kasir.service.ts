export interface item {id : number , name : string , Price : number}
export interface Selecteditem {id : number , name : string , Price : number, amount : number}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn :'root'
})
export class KasirService{
    private items : BehaviorSubject<item[]> = new BehaviorSubject<item[]> ([
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
      ])
    
      private selectedItems : BehaviorSubject<Selecteditem[]> = new BehaviorSubject<Selecteditem[]>([]);

      public items$ = this.items.asObservable();
      public selectedItems$ = this.selectedItems.asObservable();


      addItem(item :item){
        const duplicated =this.selectedItems.value.findIndex(({id})   =>id=== item.id)
    
        if(duplicated>=0){
          this.selectedItems.value[duplicated].amount +=1
        }
        else{
          this.selectedItems.value.push({...item, amount: 1})
        }
    
      }

      removeItem(itemToBeRemoved:Selecteditem){
        const itemIndex = this.selectedItems.value.findIndex(({id}) => id ===itemToBeRemoved.id)
      
        if(this.selectedItems.value[itemIndex].amount>1){
          this.selectedItems.value[itemIndex].amount-=1
        }
        else{
          this.selectedItems.value.splice(itemIndex,1);
        }
     
      }
}