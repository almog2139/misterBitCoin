// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Subscription } from 'rxjs';
 import { BitcoinService } from 'src/app/services/bitcoin.service';
// import { UserService } from 'src/app/services/user.service';
//  import { Router } from '@angular/router';
// ​
// import {ChartErrorEvent,ChartMouseLeaveEvent,ChartMouseOverEvent,ChartSelectionChangedEvent,ChartType,Column,GoogleChartComponent} from 'angular-google-charts';

// @Component({
//   selector: 'statistic-page',
//   templateUrl: './statistic-page.component.html',
//   styleUrls: ['./statistic-page.component.scss']
// })
//  export class StatisticPageComponent implements OnInit {
// //   subscription: Subscription
// //   data:any
// //   title:string
// //   color:string
// //   constructor(private userService: UserService, private bitcoinService: BitcoinService) { }
//   public charts: {
//     title: string;
//     type: ChartType;
//     data: any[][];
//     columns?: Column[];
//     options?: {};
//   }[] = [];
// ​
//   subscription: Subscription
// ​
//   marketPrice: any = []
// ​
// ​
//   @ViewChild('chart', { static: true })
//   public chart!: GoogleChartComponent;
// ​
//   constructor(private router: Router, private bitcoinService: BitcoinService) {}
// ​​
//   public onError(error: ChartErrorEvent) {
//     console.error('Error: ' + error.message.toString());
//   }
// ​
//   public onSelect(event: ChartSelectionChangedEvent) {
//     console.log('Selected: ' + event.toString());
//   }
// ​
//   public onMouseEnter(event: ChartMouseOverEvent) {
//     console.log('Hovering ' + event.toString());
//   }
// ​
//   public onMouseLeave(event: ChartMouseLeaveEvent) {
//     console.log('No longer hovering ' + event.toString());
//   }
// ​
  
//   async ngOnInit(): Promise<void> {
    
//     this.subscription = this.bitcoinService.getMarketPrice().subscribe(res => {
//       this.charts.push({
//         title: 'The average USD market price across major bitcoin exchanges',
//         type: ChartType.AreaChart,
//         columns: [
//           'Month',
//           'BTC'
//         ],
//         data: res
//       });
// ​
//     })
//     this.subscription = this.bitcoinService.getMarketPrice().subscribe(res => {
//       this.charts.push({
//         title: 'The average USD market price across major bitcoin exchanges',
//         type: ChartType.AreaChart,
//         columns: [
//           'Month',
//           'BTC'
//         ],
//         data: res
//       });
// ​
//     })
//   //    this.subscription = this.bitcoinService.getConfirmedTransactions().subscribe(res => {
//   //  console.log(res);
  
//   //   })
  
//   }
//   ngOnDestroy() {
//     this.subscription.unsubscribe()
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  marketPrice={data:[],options:{}}
  transactionsPerDay
  marketPriceSubscription: Subscription
  transitionsSubscription: Subscription
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    // this.subscription = this.bitcoinService.getMarketPrice().subscribe(res => {
    this.marketPriceSubscription = this.bitcoinService.getMarketPrice().subscribe(res => {
      // const data = res.data.map(data => {
      //   data = Object.values(data)
      //   console.log('data',data);
        
      //   data[0] = new Date(data[0] * 1000).toLocaleDateString()
      //   return data
      // })
      //  res.data = res
      this.marketPrice.data = res
      console.log('this',this.marketPrice);
      
      this.marketPrice.options = {
        hAxis: {
          title: 'The average USD market price across major bitcoin exchanges'
        },
        vAxis: {
          title: 'USD'
        }
        
      };
      console.log('this',this.marketPrice);
      
    })
    this.transitionsSubscription = this.bitcoinService.getTransactionsPerDay().subscribe(res => {
      const data = res.data.map(data => {
        data = Object.values(data)
        data[0] = `${new Date(data[0] * 1000).toLocaleDateString()} ${new Date(data[0] * 1000).toLocaleTimeString()}`
        return data
      })
      res.data = data
      this.transactionsPerDay = res
      this.transactionsPerDay.options = {
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: 'Bitcoin transitions'
        }

      };
    })
  }


  ngOnDestroy() {
    this.marketPriceSubscription.unsubscribe()
    this.transitionsSubscription.unsubscribe()
  }

}
