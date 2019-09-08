import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISymbol } from 'src/app/interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent implements OnInit {

  private stDataArr: ISymbol[] = [];
  public stockData: Observable<ISymbol[]> = of([{'name': 'aa', 'price': 44}]);
  
  constructor() { }

  ngOnInit() {
  
    this.stockData.pipe(map((x) => {
      this.stDataArr.push(...x);
      return this.stDataArr;
    }))
  }

   

}
