import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input () contact:Contact
  @Output () onTransferFunds=new EventEmitter<string>()
  amountCoins:number
  msg=''
  isShowTransfer:boolean=true
  coinsLeft=''
  constructor(private userServise:UserService) { }

  ngOnInit(): void {
  }
  onTransfer(){
   const constLeft=this.userServise.addMove(this.contact,this.amountCoins)
   if(constLeft.coins>=0){
     this.msg=`Transferred ${this.amountCoins} coins to ${this.contact.name} successfully`
     this.coinsLeft=constLeft.coins
     this.isShowTransfer=true
    }
   else{
    
    this.msg=`You do not have enough coins!!`
    setTimeout(() => {
      this.isShowTransfer=false;  
    }, 1000)
   }
   setTimeout(() => {
    this.msg = ''

  }, 1000)
   this.onTransferFunds.emit(this.msg)
    
  }

}
