import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import {Subscription} from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: User = null
  rate: any
  movesList:Array<Object>
  title="My Last 3 Moves:"
  subscription: Subscription
  constructor(private userService: UserService, private bitcoinService: BitcoinService,private route: ActivatedRoute,private router: Router) { }
  
  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser()
     this.subscription= (await this.bitcoinService.getRate(this.user.coins)).subscribe(data=>this.rate=data)
     this.onGetLoggdinUserMove()
  
  }
 onGetLoggdinUserMove() {
    
    this.movesList=this.user.moves.splice(0,3)
    console.log('movesList',this.movesList);
    
  
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
