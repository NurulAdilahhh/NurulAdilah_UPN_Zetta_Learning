import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { employeService } from '../employee.service';
interface Employee {id : string  , name : string , position : string , availability : string ,action : string }

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private employeid : string|null =null
  public employe : Employee|null = null


  constructor(private route:ActivatedRoute, private employeservice: employeService) {
    this.employeid = this.route.snapshot.paramMap.get('id')
    console.log(this.employeid);
   }

  ngOnInit(): void {
    if(typeof this.employeid === 'string'){
      this.employe = this.employeservice.getEmployById(this.employeid)
    }
    console.log(this.employe);
  }

}
