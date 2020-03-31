import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { UserAccountService } from '../shared/services/user-account.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userDeatils: any;
  public authenticated = false;
  public covidDetails: any;
  public covidNumb: any
  public covidDetailsAll: any;
  public covidNumbAll: any;
  public expandDiv = false;
  public defaultInfo = true;
  public expandDiv1 = false;
  public defaultInfo1 = true;
  public selected:any =""
  constructor(
    private router: Router, private userAccount: UserAccountService) { }

  ngOnInit() {
   
    // console.log(   this.userDeatils + "dagvhord testinggg")
    this.userAccount.covid19().subscribe(
      (res) => {
        // console.log("covid data=====>")
        this.covidDetails = res
        this.covidNumb = this.covidDetails.response
        // console.log("covid data" +  this.covidDetails.data.covid19Stats[0].city);
      },
      (error) => {
        alert("use after some time")
      }
    )

    this.userAccount.covid19All().subscribe(
      (res) => {
        console.log("covid data=====>")
        this.covidDetailsAll = res
        this.covidNumbAll = this.covidDetailsAll.response
        // console.log("covid data" +  this.covidDetailsAll.data.covid19Stats[0].city);
      },
      (error) => {
       alert("use after some time")
      }
    )
  }
  expandClick(){
    this.expandDiv =  !this.expandDiv
    this.defaultInfo = !this.defaultInfo
  }
  // collpaseClick(){

  // }
  expandClick1(co: any){
  //  this.selected = co.country;
    this.expandDiv1 =  !this.expandDiv1
    this.defaultInfo1 = !this.defaultInfo1;
    // console.log(this.selected )
  
  }
}
