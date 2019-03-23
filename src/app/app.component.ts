import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DataModel } from './Models/data';
import { EventSummaryModel } from './Models/eventSummaryModel';
import { MainDataModel } from './Models/mainData';
import { SecurityGaurdModel } from './Models/SecurityGaurdModel';
import { VisitorDaySummary } from './Models/VisitorDaySummary';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    message: string;
    status: string;
    eventSummary: EventSummaryModel;
    securityGuardsSummaryArray: SecurityGaurdModel;
    visitorSummaryArray: VisitorDaySummary;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();


    constructor(private http: HttpClient) {
        this.getData();
    }
    title = 'API';

    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
    }

    getData() {

        this.http.get('http://34.231.195.192:9090/services/proximity/api/dashboard/root')
            .pipe(map((res: DataModel) => {
                const data = res.data as MainDataModel;
                const eventSummary = data.eventSummary as EventSummaryModel;
                const securityGuardsSummary = data.securityGuardsSummary as SecurityGaurdModel;
                const visitorSummary = data.visitorSummary as VisitorDaySummary;
                const message = res.message;
                const status = res.status;
                return { data, message, status, eventSummary, securityGuardsSummary, visitorSummary }
            }))
            .subscribe(res => {
                this.message = res.message;
                this.status = res.status;
                this.eventSummary = res.eventSummary;
                console.log(this.eventSummary)
                this.securityGuardsSummaryArray = res.securityGuardsSummary;
                console.log(this.securityGuardsSummaryArray)
                this.visitorSummaryArray = res.visitorSummary;
                this.dtTrigger.next();

            })
    }





    // Image Cordinates Data
    public seriesData: number[] = [20, 40, 45, 30, 50];
    public categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
}
