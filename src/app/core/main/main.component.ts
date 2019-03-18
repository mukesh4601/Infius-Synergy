import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    authToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjUsImlzcyI6Imh0dHA6Ly9hcGkuY29pbmdlbnguY29tL2xvZ2luVXNlciIsImlhdCI6MTU0MTMzNDU4MywiZXhwIjoxNTQxMzM4MTgzLCJuYmYiOjE1NDEzMzQ1ODMsImp0aSI6InI3YUV3dEM0TEl0THZoeFoifQ.1y3tf-GvTdeqQ5tVL7aSY5IrDMd28EFJaeMipEwIo44"
    data: any[] = []
    httpHeaders = new HttpHeaders().set('authorization', this.authToken);
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.fetchData('http://34.231.195.192:9090/services/proximity/api/dashboard/roots');
    }


    fetchData(url: string) {
        this.http.get(url).subscribe(
            res => {
                this.data.push(res);
                console.log(res)
            }
        );
    }

}
