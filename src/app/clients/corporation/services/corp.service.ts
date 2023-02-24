import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Corporation } from "../models/Corporation";

@Injectable({
    providedIn: 'root'
  })
export class CorpService
{

    corporation: Corporation = new Corporation()

    constructor() { }
  
    getCorp(): Corporation {
      return this.corporation
    }
  
    setRole(role: string): void {
      this.corporation.role = role
    }
  
    setEmail(email: string): void {
      this.corporation.corpEmail = email
    }
  
    setPassword(password: string): void {
      this.corporation.corpPassword = password
    }
  
    setcorpName(firstName: string): void {
      this.corporation.corpName = firstName
    }
  
    // setLastName(lastName: string): void {
    //   this.corporation.lastName = lastName
    // }
  
    setArea(area: string): void {
      this.corporation.corpLocation = area
    }
  
    // setProfileImage(profileImage: string): void {
    //   this.corporation.profileImage = profileImage
    // }

    // corpList:Corporation[] = [
    //     new Corporation('101', 'Mohab'),
    //     new Corporation('102', 'Mohab1')
    // ]
    // corpListSubject:Subject<Corporation> = new Subject<Corporation>()

    // constructor(private http:HttpClient) {}

    // addCorp = (corporation:Corporation) : Observable<Corporation> =>
    //     this.http.post<Corporation>("https://localhost:4646/add-corp", corporation);
    // test()
    // {
    //     (this.addCorp(new Corporation('30', 'SpaceX'))).subscribe(data => {
    //         this.corpList.push(data)
    //         this.corpListSubject.next(data)
    //     })
    // }
}