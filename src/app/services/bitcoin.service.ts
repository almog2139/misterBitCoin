import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment' 

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

   getRate(coins: number) {
    return  this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    
  }
   getMarketPrice() {
    let monthMap = {}
    let data = []
    return this.http.get<{ values }>(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`).pipe(map
      (res => {
        monthMap = res.values.reduce((acc, curr) => {
          let month = moment(+`${curr.x}000`).format('MMM')
          acc[month] = acc[month] ?
            { total: acc[month].total + curr.y, count: acc[month].count + 1 } : { total: curr.y, count: 1 };
          return acc;
        }, {})
        Object.keys(monthMap).map(month => {
          let avg = Math.floor(monthMap[month].total / monthMap[month].count)
          let currMonth = [month, avg]
          data = [...data, currMonth]
        })
        console.log(data);
        return data
      }))
  }
  // public getConfirmedTransactions() {
  //   return this.http.get<{ values }>(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`).pipe(map(res => res.values))

  // }
  public getMarketPriceStat() {
    return this.http.get<{ values, name, description }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      .pipe(
        map(res => {
          return { name: res.name, title: res.description, data: res.values}
        })
      )
  }
  public getTransactionsPerDay() {
    return this.http.get<{ values, name, description }>(' https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&format=json&cors=true')
      .pipe(
        map(res => {
          return { name: res.name, title: res.description, data: res.values}
        })
      )
  }
 


}
