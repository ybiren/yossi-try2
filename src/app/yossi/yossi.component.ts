import { Component, OnInit, OnChanges } from '@angular/core';
import { YossiService } from '../yossi.service';
import { Observable, forkJoin, of, interval } from 'rxjs';
import { IPerson, IFiltered, IPersonDat } from '../interfaces';
import { combineLatest } from 'rxjs';
import { map, mergeMap, switchMap, flatMap, exhaustMap } from 'rxjs/operators';
import { Class1 } from '../yossi/classes';
import * as moment from 'moment';
import { IPriceItem } from '../models/interfaces';

@Component({
  selector: 'app-yossi',
  templateUrl: './yossi.component.html',
  styleUrls: ['./yossi.component.scss']
})
export class YossiComponent implements OnInit,OnChanges {

  public persons: Observable<IPerson[]>
  public personsDataUserPref: Observable<IPersonDat>;
  private filtered: Observable<IFiltered>;
  public aa: Observable<string> = of('ddd','eee','fff');
  public currentTimeFRLocale: string;
  public mvc$: Observable<number>;
  public priceItem$: Observable<IPriceItem>;
  public isHover = false;

  constructor(public yossiSvc: YossiService) { }

  @deco
  ngOnInit() {
    
    const cl1: Class1 = new Class1();
    const xx = cl1;
    const yy = cl1;

    const numbers1: Observable<number> = interval(1000);
    const numbers2: Observable<number> = of(1,2);
    
    const number3$ = numbers2.pipe(exhaustMap(x => this.yossiSvc.Obs(x)  ));
    //numbers2.pipe(map(x=>-x)).subscribe();
    number3$.subscribe(x=> console.log(x));
    //numbers1.subscribe(x=> console.log(x));
    //mergeMap(numbers1,numbers2).

    this.mvc$ = this.yossiSvc.GetFromMVC();
    this.priceItem$ = this.yossiSvc.GetItemFromMVC();

    //alert( `${xx}   ${yy}`);
    //this.yossiSvc.GetEmployees().subscribe(res=>console.log(res));

    this.persons = this.yossiSvc.GetEmployees();
    this.filtered = this.yossiSvc.GetFFilter();

    this.personsDataUserPref = forkJoin(this.persons, this.filtered).pipe(
       
      map(([a,b]) => {
         return { 
           'dat': a.filter((item) => {
            return item.id == b.id;
          }),
          'bgColor': b.bgColor
        }
      })); 
   

      moment.locale('he');
      this.currentTimeFRLocale = moment().format('LLL');
    } 

    ngOnChanges() {
    }  
  
    
    wakeS1() {
      this.yossiSvc.s1.next('A');
      window['subPub']();
    }
    wakeS2() {
      this.yossiSvc.s2.next('B');
    }

    postItemToMVC() {
      this.yossiSvc.PostItemToMVC().subscribe(()=> {alert(1)}, (error)=>{alert(2)});
    }
  
    selChange(event: Event) {
      alert(event.target['selectedIndex']);
    }
    cbClick(isCheched: boolean){
      alert(isCheched);
    }
  }
