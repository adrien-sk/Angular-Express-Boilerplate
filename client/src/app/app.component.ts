import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Foo {
  id: number;
  username: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-Express-Boilerplate';
  testApi!: Observable<Foo[]>;

  constructor(private http: HttpClient) {
    this.testApi = this.http.get<Foo[]>('http://localhost:8080/v1/foo');
  }
}
