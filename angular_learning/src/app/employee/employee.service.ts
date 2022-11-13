export interface employ {id : string, name : string, position : string, availability : string, action : string}
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of } from "rxjs"
export interface Employee {id : string}

@Injectable({
    providedIn : 'root'
})

    export class employeeService{
        [x: string]: any;
        privateEmploy : BehaviorSubject<employ[]> = new BehaviorSubject<employ[]>([
            {id : '1' , name : 'M Virgian Listianto', position :'Manager', availability :  'Hadir' ,action : 'view detail'},
            {id : '2' , name : 'M Wilian Kevin', position :'Project Manager', availability :  'Hadir' ,action : 'view detail'},
            {id : '3' , name : 'Handres Victor Lois', position :'Staff', availability :  'Bolos' ,action : 'view detail'},
            {id : '4' , name : 'Bela Lola Pebrianti', position :'Waiters', availability :  'Hadir' ,action : 'view detail'}
        ]);

        constructor(){

        }

        public employ$ = this["Employ"].asObservable();

        getEmployById(id:string) : any{
            const employearray = this["Employ"].getValue();
            console.log(employearray)
            const employ = employearray.find((employ: { id: string; }) => employ.id ===id)
            return employ || null;

        }
        
    }

    