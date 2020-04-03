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
  public expandDiv1: boolean ;
  public defaultInfo1 = true;
  public selected: any = "";
  public searchText;
  public loaderShowingAllWorld = true;
  public loaderShowingAllIndia = true;
  constructor(
    private router: Router, private userAccount: UserAccountService) { }

  ngOnInit() {

    this.loaderShowingAllWorld = true;
    this.loaderShowingAllIndia = true;
    this.userAccount.covid19().subscribe(
      (res) => {
        this.covidDetails = res
        this.covidNumb = this.covidDetails.response
        this.loaderShowingAllIndia = false;
      },
      (error) => {
        alert("use after some time")
      }
    )

    this.userAccount.covid19All().subscribe(
      (res) => {
        // console.log("covid data=====>")
        this.covidDetailsAll = res
        this.covidNumbAll = this.covidDetailsAll.response
        this.loaderShowingAllWorld = false;
        return this.covidNumbAll.sort(this.sortFunc)
      },
      (error) => {
        alert("use after some time")
      }
    )


  }
  expandClick() {
    this.expandDiv = !this.expandDiv
    this.defaultInfo = !this.defaultInfo
  }
  // collpaseClick(){

  // }
  expandClick1(co, index, t) {
 
    this.expandDiv1 = t
    console.log(this.expandDiv1)
 

  }

  sortFunc(a: any, b: any) {
    // console.log(a.cases.total - b.cases.total)
    return b.cases.total - a.cases.total
  }
}
