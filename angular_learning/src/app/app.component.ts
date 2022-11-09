import { Component,AfterViewInit,ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  styles:[`[highlight]{background: #f5a95d}`,
  '[coba]{background: red; color: white}'

]
})
export class AppComponent {
  title = 'angular_learning';
  @ViewChild('el') bgGreen?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;


  ngAftwweViewInit(){
    this.bgGreen?.nativeElement.setAttribute('highlight', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
  }
}
