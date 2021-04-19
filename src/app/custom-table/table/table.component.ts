import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { StudentList } from '../../common/interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableMap =  {
    Name: 'name',
    Class: 'class',
    Section: 'section',
    Subject1: 'sub1',
    Subject2: 'sub2',
    Subject3: 'sub3'
  };
  sortStatus = {} as any;
  tableList: StudentList;
  tempTableList: StudentList;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(): void {
    this.api.getStudentInfo().subscribe((student) => {
      this.tableList = student;
      this.tempTableList =  JSON.parse(JSON.stringify(student));
    });
  }

  sortTable(coloumName: string): void {
    const sortKey = this.tableMap[coloumName];
    let sortType = 'ascending';
    let sortTable;
    if (this.sortStatus[sortKey]) {
      sortType = this.sortStatus[sortKey] === 'ascending' ?  'descending' : 'noSort';
    }
    this.sortStatus[sortKey] = sortType;
    if (sortType === 'noSort' ) {
        sortTable = JSON.parse(JSON.stringify(this.tempTableList.studentInfo));
        delete this.sortStatus[sortKey];
    } else if ( sortType === 'ascending' ){
      sortTable = this.tableList.studentInfo.sort((a, b) => {
            if (a[sortKey]  > b[sortKey]) {
            return 1;
            }
            return -1;
          });
    }else {
      sortTable = this.tableList.studentInfo.sort((a, b) => {
        if (a[sortKey]  > b[sortKey]) {
        return -1;
        }
        return 1;
      });
    }

    this.tableList.studentInfo = sortTable;
    }

}
