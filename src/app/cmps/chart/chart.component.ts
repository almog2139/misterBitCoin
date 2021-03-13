import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartData
  type ='LineChart'
  width = 550;
  height = 350;
  isLoad =false
  isDelay=false
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>this.isDelay=true,1500)
  }
  
  load() {
    setTimeout(()=>{
      this.isLoad = true
    },1)
  }

}
