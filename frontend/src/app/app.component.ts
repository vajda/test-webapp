import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  title = 'test-app';
  a: string = "a";
  b: number = 0;

  ngOnInit() {
    console.log("ng on init called.");
    this.getDrugFamilies().subscribe(response => {
      this.a = response.a;
      this.b = response.b;
    });
  }

  getDrugFamilies(): Observable<any> {
    console.log("get drug families called.");
    return this.http.get<any>('http://localhost:3000/api/test');
  }
}
