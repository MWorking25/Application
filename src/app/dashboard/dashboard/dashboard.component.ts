import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rowData : any;
  pagesize = 10;
  private gridApi;
  private gridColumnApi;
  private statusBar;
  private sideBar;

  private columnDefs;
  private autoGroupColumnDef;
  private defaultColDef;
  private rowSelection;
  private rowGroupPanelShow;
  private pivotPanelShow;
  private paginationPageSize;
  private paginationNumberFormatter;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initColumns()
  }

  initColumns()
  {
    this.columnDefs = [
      {
        headerName: "Participant",
        children: [
          {
            field: "athlete",
            width: 150,
            checkboxSelection: true,
            filter: "agTextColumnFilter",
            filterParams: { selectAllOnMiniFilter: true }
          },
          {
            field: "age",
            width: 90,
            filter: "agNumberColumnFilter"
          }
        ]
      },
      {
        headerName: "Details",
        children: [
          {
            field: "country",
            width: 120,
            filter: "agTextColumnFilter"
          },
          {
            field: "year",
            width: 90,
            filter: "agTextColumnFilter"
          },
          {
            field: "date",
            width: 170,
            filter: 'agDateColumnFilter',
            filterParams: {
              comparator: function(filterLocalDateAtMidnight, cellValue) {
                var dateAsString = cellValue;
                var dateParts = dateAsString.split("/");
                var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
                if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                  return 0;
                }
                if (cellDate < filterLocalDateAtMidnight) {
                  return -1;
                }
                if (cellDate > filterLocalDateAtMidnight) {
                  return 1;
                }
              }
            }
          },
          {
            field: "sport",
            width: 110,
            filter: "agTextColumnFilter"
          }
        ]
      },
      {
        headerName: "Medals",
        children: [
          {
            field: "total",
            width: 100,
            columnGroupShow: "closed",
            filter: "agNumberColumnFilter"
          },
          {
            field: "gold",
            width: 100,
            columnGroupShow: "open",
            filter: "agNumberColumnFilter"
          },
          {
            field: "silver",
            width: 100,
            columnGroupShow: "open",
            filter: "agNumberColumnFilter"
          },
          {
            field: "bronze",
            width: 100,
            filter: "agNumberColumnFilter"
          },
          
        ]
      }
    ];
    this.autoGroupColumnDef = {
      headerName: "Group",
      width: 200,
      field: "athlete",
      valueGetter: function(params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: { checkbox: true }
    };
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
     
    };

    this.sideBar = ["filters","columns"];
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };
  }


  onPageSizeChanged(newageSize) {
    var value = this.pagesize;
    this.gridApi.paginationSetPageSize(Number(value));
  }


  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      console.log(selectedRow)
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.athlete;
    });
    document.querySelector("#selectedRows").innerHTML = selectedRowsString;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe(data => {
        this.rowData = data;
        params.api.paginationGoToPage(4);
      });
  }



}
