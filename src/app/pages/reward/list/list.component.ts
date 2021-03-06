import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../../shared/header-navigation/navigation.service';
// import { } from navigation.component.ts

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private sub: any;
  response: object;
  advSearch: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private navservice: NavigationService) {

    // set false
    this.navservice.setEditButton(false);
    this.navservice.setDeleteButton(false);
    this.navservice.setPrintButton(false);
    this.navservice.setSaveButton(false);
    this.navservice.setCancelButton(false);
    this.navservice.setNextPageButton(false);
    // set true
    this.navservice.setNewButton(true);
    this.navservice.setSearchBar(true);
    this.advSearch = this.navservice.showAdvSearch;

    this.response = [{ "no": 1, "work_no": "TN90806026000002", "case_no": "001/2561" , "arrest_day": "10-ม.ค.-2560", "court_date": "10-ม.ค.-2560 ", "lawyer": "นายธวัชชัย บิง ", "department": "สสท.ระนอง สาขาเมือง" },
    { "no": 2, "work_no": "TN90806026000002", "case_no": "001/2561" , "arrest_day": "10-ม.ค.-2560", "court_date": "10-ม.ค.-2560 ", "lawyer": "นายธวัชชัย บิง ", "department": "สสท.ระนอง สาขาเมือง" },
    { "no": 3, "work_no": "TN90806026000002", "case_no": "001/2561" , "arrest_day": "10-ม.ค.-2560", "court_date": "10-ม.ค.-2560 ", "lawyer": "นายธวัชชัย บิง ", "department": "สสท.ระนอง สาขาเมือง" }];
  }

  ngOnInit() {
    this.sub = this.navservice.showNewButton.subscribe(status => {
      // if (status) {
      //   this.newButton();
      // }
    })
  }

  viewData(arrestCode: string) {
    this.router.navigate(['/reward/manage', 'R','v'], { queryParams: { arrestCode: arrestCode } });
  }



  // private newButton() {
  //   this.router.navigate(['/reward/manage', 'R']);
  // }

}
