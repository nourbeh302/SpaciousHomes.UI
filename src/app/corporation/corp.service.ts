import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Corporation } from "../models/Enterprise";

@Injectable()
export class CorpService
{

    corpList:Corporation[] = [
        new Corporation('101', 'Mohab'),
        new Corporation('102', 'Mohab1')
    ]
    corpListSubject:Subject<Corporation> = new Subject<Corporation>()

    constructor(private http:HttpClient) {}

    addCorp = (corporation:Corporation) : Observable<Corporation> =>
        this.http.post<Corporation>("https://localhost:4646/add-corp", corporation);
    test()
    {
        (this.addCorp(new Corporation('30', 'SpaceX'))).subscribe(data => {
            this.corpList.push(data)
            this.corpListSubject.next(data)
        })
    }
}