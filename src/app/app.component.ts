import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import{UserAccountService} from './shared/services/user-account.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'simple-hr';
  public dataLang
  constructor(private translator: TranslateService, private userService:UserAccountService) {
    this.translator.addLangs(['en', 'hi'])
    this.translator.setDefaultLang('en')




    }
    ngOnInit() {

    }
  }
  

