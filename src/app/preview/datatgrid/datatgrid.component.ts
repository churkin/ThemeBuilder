import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
    selector: 'app-datagrid',
    templateUrl: './datatgrid.component.html',
    styleUrls: ['./datatgrid.component.css']
})
export class DatagridComponent implements OnInit, OnDestroy {
    widgetGroup = 'datagrid';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('dataGrid') dataGrid: DxDataGridComponent;

    dataSource: Array<any> = [
        {
            'orderId': 10248,
            'region': 'North America',
            'country': 'United States',
            'city': 'New York',
            'amount': 1740,
            'date': '2013/01/06'
        }, {
            'orderId': 10249,
            'region': 'North America',
            'country': 'United States',
            'city': 'Los Angeles',
            'amount': 850,
            'date': '2013/01/13'
        }, {
            'orderId': 10250,
            'region': 'North America',
            'country': 'United States',
            'city': 'Denver',
            'amount': 2235,
            'date': '2013/01/07'
        }, {
            'orderId': 10251,
            'region': 'North America',
            'country': 'Canada',
            'city': 'Vancouver',
            'amount': 1965,
            'date': '2013/01/03'
        }, {
            'orderId': 10252,
            'region': 'North America',
            'country': 'Canada',
            'city': 'Edmonton',
            'amount': 880,
            'date': '2013/01/10'
        }, {
            'orderId': 10256,
            'region': 'Europe',
            'country': 'United Kingdom',
            'city': 'London',
            'amount': 6175,
            'date': '2013/01/24'
        }, {
            'orderId': 10257,
            'region': 'Europe',
            'country': 'Germany',
            'city': 'Berlin',
            'amount': 4575,
            'date': '2013/01/11'
        }, {
            'orderId': 10258,
            'region': 'Europe',
            'country': 'Spain',
            'city': 'Madrid',
            'amount': 3680,
            'date': '2013/01/12'
        }, {
            'orderId': 10259,
            'region': 'Europe',
            'country': 'Russian Federation',
            'city': 'Moscow',
            'amount': 2260,
            'date': '2013/01/01'
        }, {
            'orderId': 10260,
            'region': 'Asia',
            'country': 'China',
            'city': 'Beijing',
            'amount': 2910,
            'date': '2013/01/26'
        }, {
            'orderId': 10261,
            'region': 'Asia',
            'country': 'Japan',
            'city': 'Tokyo',
            'amount': 8400,
            'date': '2013/01/05'
        }, {
            'orderId': 10262,
            'region': 'Asia',
            'country': 'Korea (Republic of)',
            'city': 'Seoul',
            'amount': 1325,
            'date': '2013/01/14'
        }, {
            'orderId': 10263,
            'region': 'Australia',
            'country': 'Australia',
            'city': 'Sydney',
            'amount': 3920,
            'date': '2013/01/05'
        }, {
            'orderId': 10264,
            'region': 'Australia',
            'country': 'Australia',
            'city': 'Melbourne',
            'amount': 2220,
            'date': '2013/01/15'
        }, {
            'orderId': 10265,
            'region': 'Africa',
            'country': 'South Africa',
            'city': 'Pretoria',
            'amount': 940,
            'date': '2013/01/01'
        }, {
            'orderId': 10266,
            'region': 'Africa',
            'country': 'Egypt',
            'city': 'Cairo',
            'amount': 1630,
            'date': '2013/01/10'
        }, {
            'orderId': 10267,
            'region': 'North America',
            'country': 'Canada',
            'city': 'Edmonton',
            'amount': 2910,
            'date': '2013/01/23'
        }
    ];

    collapsedOptions = {
        columnChooser: { enabled: false },
        rowAlternationEnabled: false,
        showBorders: true,
        paging: {
            pageSize: 10
        },
        filterRow: {
            visible: false
        },
        searchPanel: {
            visible: false
        },
        groupPanel: {
            visible: false
        },
        editing: {
            allowUpdating: false,
            allowDeleting: false,
            mode: 'row'
        },
        summary: {
            totalItems: [
                {
                    column: undefined,
                    summaryType: undefined,
                    displayFormat: undefined
                }
            ],
            groupItems: [
                {
                    column: undefined,
                    summaryType: undefined
                }
            ]
        },
        hoverStateEnabled: false,
        allowColumnResizing: false,
        allowColumnReordering: false,
        pager: {
            showPageSizeSelector: true
        },
        selection: {
            mode: 'multiple'
        },
        keyExpr: 'orderId',
        selectedRowKeys: [10249],
        columns: [
            {
                dataField: 'orderId',
                caption: 'Order ID',
                width: 90
            },
            'city', {
                dataField: 'country',
                width: 180
            }, {
                dataField: 'region',
                groupIndex: null,
                sortOrder: undefined
            }, {
                dataField: 'date',
                dataType: 'date'
            }, {
                dataField: 'amount',
                format: 'currency',
                width: 90
            }
        ]
    };

    expandedOptions = {
        columnChooser: { enabled: true },
        rowAlternationEnabled: true,
        filterRow: {
            visible: true
        },
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true
        },
        searchPanel: {
            visible: true
        },
        groupPanel: {
            visible: true
        },
        selection: {
            mode: 'multiple'
        },
        hoverStateEnabled: true,
        allowColumnResizing: true,
        allowColumnReordering: true,
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            mode: 'batch'
        },
        keyExpr: 'orderId',
        selectedRowKeys: [10250, 10251],
        columns: [
            {
                dataField: 'orderId',
                caption: 'Order ID',
                width: 90
            },
            'city', {
                dataField: 'country',
                width: 180
            },
            {
                dataField: 'region',
                groupIndex: 0,
                sortOrder: 'desc'
            }, {
                dataField: 'date',
                dataType: 'date'
            }, {
                dataField: 'amount',
                format: 'currency',
                width: 90
            }
        ],
        summary: {
            totalItems: [
                {
                    column: 'amount',
                    summaryType: 'sum',
                    displayFormat: 'Total: {0}'
                }
            ],
            groupItems: [
                {
                    column: 'orderId',
                    summaryType: 'count'
                }
            ]
        }
    };

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.dataGrid.instance.beginUpdate();
            this.dataGrid.instance.clearGrouping();
            this.dataGrid.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.dataGrid.instance.endUpdate();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}