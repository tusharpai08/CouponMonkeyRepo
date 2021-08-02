import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items:any;

  constructor(private router: Router, public http: HttpClient) {
    this.getData();
  }
    navigate()
    {
      this.router.navigate(['/coupons']);
    }

    getData(){
     let url = 'https://jsonplaceholder.typicode.com/photos';
     let data: Observable<any> = this.http.get(url);
     data.subscribe(result => {
     this.items = result;
      /* console.log(result); */
    });

    }
      
  }


