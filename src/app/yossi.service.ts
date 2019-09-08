import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson, IFiltered, IPersonDat } from './interfaces';
import { IPriceItem } from './models/interfaces';

import { Observable, Subject } from 'rxjs';
import { map, take, delay, flatMap,switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YossiService {

  constructor(private http: HttpClient) { }

  s1:Subject<string> = new Subject<string>(); 
  s2:Subject<string> = new Subject<string>(); 

  private errorCatcher(): any {
    alert("error");
  }

  public GetEmployees(): Observable<IPerson[]> {
    return this.http.get<IPersonDat>('assets/person.json').pipe(map(res=>res.dat));
  }

  public GetFFilter(): Observable<IFiltered> {
    return this.http.get<IFiltered>('assets/filtered.json');
  }
  
  public Obs(x: number):Observable<string> {
    if(x===1)
      return this.s1;
    else
      return this.s2;
  } 

  public GetFromMVC(): Observable<number> {
    return this.http.get<number>('http://localhost:61026/Default/Func');
  }

  public GetItemFromMVC(): Observable<IPriceItem> {
    return this.http.get<IPriceItem>('http://localhost:61026/Yossi/Get');
  }
  
  public PostItemToMVC(): Observable<IPriceItem> {
    const iPriceItem: IPriceItem = {
      id: 2,
      name: 'shampoo',
      price: 55.5
    }
    return this.http.post<IPriceItem>('http://localhost:61026/Yossi/Post', iPriceItem).pipe(catchError(this.errorCatcher()));
  }
}
