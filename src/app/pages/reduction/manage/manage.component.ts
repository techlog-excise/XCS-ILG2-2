import { NavigationService } from './../../../shared/header-navigation/navigation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {


  tableData = [
    {
      fullName: "นายธวัชชัย บิงขุนทด",
      oldFine: "1,400,000.00",
      newFine: "",
      dateFine: "10-ม.ค.-2560",
      payment: "เงินสด",
      receiptNo: "33",
      receiptRef: "001/2561",
      statusCase: "รับรายการนำส่ง",
      typeCase: "เปรียบเทียบคดี",
      period: "1/1"
    },
    {
      fullName: "นายสุชาติ ปัญโญใหญ่",
      oldFine: "1,400,000.00",
      newFine: "",
      dateFine: "10-ม.ค.-2560",
      payment: "เงินสด",
      receiptNo: "33",
      receiptRef: "001/2561",
      statusCase: "รับรายการนำส่ง",
      typeCase: "เปรียบเทียบคดี",
      period: "1/1"
    },
  ];

  listData = [{
    arrestCode: "TN90806026000001",
    lawsuitNo: "001/2561",
    proofNo: "001/2561",
    caseNumber: "001/2561",
    titleName: "นาย",
    firstName: "ธวัชชัย",
    lastName: "บิงขุนทด",
    lawsuitDate: "10-ม.ค.-2560",
    lawsuitTime: "12.00",
    departmentlawName: "สสท.ระนอง สาขาเมืองกระบุรี",
    positionlawName: "เจ้าพนักงานสรรพสามิตชำนาญงาน",
    locationlawName: "คลองจั่น/บางกะปิ/กรุงเทพมหานคร",
    faultSubject: "มีไว้ในครอบครองซึ่งสินค้าที่มิได้เสียภาษี",
    faultNo: "203",
    penalty: "กรณียาสูบ สุรา และไพ่ ปรับ 10 เท่า กรณีความผิดสินค้าอื่น กระทำผิดครั้งที่ 1 ปรับ 2 เท่า เว้นน้ำมัน และผลิตภัณฑ์น้ำมันปรับ 5 เท่า กระทำผิดครั้งที่ 2 ปรับ 5 เท่า เว้นน้ำมันและผลิตภัณฑ์น้ำมันปรับ 10 เท่า กระทำผิดครั้งที่ 3 ปรับ 10 เท่า"

  },
  {
    arrestCode: "TN90806026000002",
    lawsuitNo: "น.001/2561",
    proofNo: "น.001/2561",
    caseNumber: "001/2561",
    titleName: "นาย",
    firstName: "ธวัชชัย",
    lastName: "บิงขุนทด",
    lawsuitDate: "19-มี.ค.-2560",
    lawsuitTime: "12.00",
    departmentlawName: "สสท.ระนอง สาขาเมืองกระบุรี",
    positionlawName: "เจ้าพนักงานสรรพสามิตชำนาญงาน",
    locationlawName: "คลองจั่น/บางกะปิ/กรุงเทพมหานคร",
    faultSubject: "มีไว้ในครอบครองซึ่งสินค้าที่มิได้เสียภาษี",
    faultNo: "203",
    penalty: "กรณียาสูบ สุรา และไพ่ ปรับ 10 เท่า กรณีความผิดสินค้าอื่น กระทำผิดครั้งที่ 1 ปรับ 2 เท่า เว้นน้ำมัน และผลิตภัณฑ์น้ำมันปรับ 5 เท่า กระทำผิดครั้งที่ 2 ปรับ 5 เท่า เว้นน้ำมันและผลิตภัณฑ์น้ำมันปรับ 10 เท่า กระทำผิดครั้งที่ 3 ปรับ 10 เท่า"

  },
  {
    arrestCode: "TN90806026000003",
    lawsuitNo: "002/2561",
    proofNo: "002/2561",
    caseNumber: "002/2561",
    titleName: "นาย",
    firstName: "ธวัชชัย",
    lastName: "บิงขุนทด",
    lawsuitDate: "22-ต.ค.-2560",
    lawsuitTime: "12.00",
    departmentlawName: "สสท.ระนอง สาขาเมืองกระบุรี",
    positionlawName: "เจ้าพนักงานสรรพสามิตชำนาญงาน",
    locationlawName: "คลองจั่น/บางกะปิ/กรุงเทพมหานคร",
    faultSubject: "มีไว้ในครอบครองซึ่งสินค้าที่มิได้เสียภาษี",
    faultNo: "203",
    penalty: "กรณียาสูบ สุรา และไพ่ ปรับ 10 เท่า กรณีความผิดสินค้าอื่น กระทำผิดครั้งที่ 1 ปรับ 2 เท่า เว้นน้ำมัน และผลิตภัณฑ์น้ำมันปรับ 5 เท่า กระทำผิดครั้งที่ 2 ปรับ 5 เท่า เว้นน้ำมันและผลิตภัณฑ์น้ำมันปรับ 10 เท่า กระทำผิดครั้งที่ 3 ปรับ 10 เท่า"
  },
  {
    arrestCode: "TN90806026000004",
    lawsuitNo: "003/2561",
    proofNo: "003/2561",
    caseNumber: "003/2561",
    titleName: "นาย",
    firstName: "ธวัชชัย",
    lastName: "บิงขุนทด",
    lawsuitDate: "11-ธ.ค.-2560",
    lawsuitTime: "12.00",
    departmentlawName: "สสท.ระนอง สาขาเมืองกระบุรี",
    positionlawName: "เจ้าพนักงานสรรพสามิตชำนาญงาน",
    locationlawName: "คลองจั่น/บางกะปิ/กรุงเทพมหานคร",
    faultSubject: "มีไว้ในครอบครองซึ่งสินค้าที่มิได้เสียภาษี",
    faultNo: "203",
    penalty: "กรณียาสูบ สุรา และไพ่ ปรับ 10 เท่า กรณีความผิดสินค้าอื่น กระทำผิดครั้งที่ 1 ปรับ 2 เท่า เว้นน้ำมัน และผลิตภัณฑ์น้ำมันปรับ 5 เท่า กระทำผิดครั้งที่ 2 ปรับ 5 เท่า เว้นน้ำมันและผลิตภัณฑ์น้ำมันปรับ 10 เท่า กระทำผิดครั้งที่ 3 ปรับ 10 เท่า"
  },
  {
    arrestCode: "TN90806026000005",
    lawsuitNo: "004/2561",
    proofNo: "004/2561",
    caseNumber: "004/2561",
    titleName: "นาย",
    firstName: "ธวัชชัย",
    lastName: "บิงขุนทด",
    lawsuitDate: "03-มี.ค.-2561",
    lawsuitTime: "12.00",
    departmentlawName: "สสท.ระนอง สาขาเมืองกระบุรี",
    positionlawName: "เจ้าพนักงานสรรพสามิตชำนาญงาน",
    locationlawName: "คลองจั่น/บางกะปิ/กรุงเทพมหานคร",
    faultSubject: "มีไว้ในครอบครองซึ่งสินค้าที่มิได้เสียภาษี",
    faultNo: "203",
    penalty: "กรณียาสูบ สุรา และไพ่ ปรับ 10 เท่า กรณีความผิดสินค้าอื่น กระทำผิดครั้งที่ 1 ปรับ 2 เท่า เว้นน้ำมัน และผลิตภัณฑ์น้ำมันปรับ 5 เท่า กระทำผิดครั้งที่ 2 ปรับ 5 เท่า เว้นน้ำมันและผลิตภัณฑ์น้ำมันปรับ 10 เท่า กระทำผิดครั้งที่ 3 ปรับ 10 เท่า"
  }]

  fileItem = [{
    fileName: "",
    filePath: "",
  }];

  fullName: any;
  detailData: any;
  showField: any;
  navServiceSub: any;
  selectAll: any;
  private getDataFromListPage: any;

  @ViewChild('reductionPopup') modalReduction: ElementRef;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private navService: NavigationService) { }

  ngOnInit() {

    //set show button
    this.navServiceSub = this.navService.showFieldEdit.subscribe(status => {
      this.showField = status;
      if (!this.showField) {
        this.navService.setCancelButton(true);
        this.navService.setSaveButton(true);
        this.navService.setPrintButton(false);
        this.navService.setSearchBar(false);
        this.navService.setDeleteButton(false);
        this.navService.setEditButton(false);

      } else {
        this.navService.setPrintButton(true);
        this.navService.setDeleteButton(true);
        this.navService.setEditButton(true);
        this.navService.setSearchBar(false);
        this.navService.setCancelButton(false);
        this.navService.setSaveButton(false);
      }
    });


    this.getDataFromListPage = this.activeRoute.queryParams
      .subscribe(params => {
        //check id from list page
        for (let i = 0; i < this.listData.length; i++) {
          if (params.code == this.listData[i].arrestCode) {
            this.detailData = this.listData[i];
            this.fullName =
              this.listData[i].titleName +
              this.listData[i].firstName +
              " " +
              this.listData[i].lastName;
          }
        }
      });
  }

  viewData(id: string) {
    this.router.navigate(['/reduction/manage', 'R', this.detailData.arrestCode], { queryParams: { id: id } });
  }

  editData(id: string) {
    this.router.navigate(['/reduction/manage', 'R', this.detailData.arrestCode], { queryParams: { id: id } });
  }

  attachFile(file) {
    this.fileItem.push({
      fileName: file[0].name,
      filePath: ""
    });
  }

  showReductionPopup() {
    // jQuery(this.modalReduction.nativeElement).modal('show');
  }

  ngOnDestroy() {
    this.getDataFromListPage.unsubscribe();
    this.navServiceSub.unsubscribe();
  }
}
