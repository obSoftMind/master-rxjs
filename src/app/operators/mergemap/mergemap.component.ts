import { Component, OnInit } from '@angular/core';
import { delay, fromEvent, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {


  ngOnInit(): void {

    //mergeMap simulating save of click locations
    const saveLocation = (location: any) => {
      return of(location)
        .pipe(
          delay(500)
        )
    }
    const click$ = fromEvent(document, 'click');

    click$
      .pipe(
        mergeMap((e:any) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          })
        })
      ).subscribe( r => console.log('Saved!', r));

      //mergeMap with ajax observable

      const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

      const click1$ = fromEvent(document, 'click');

      click1$
        .pipe(
          /*
           * Using mergeMap for example, but generally for GET requests
           * you will prefer switchMap.
           * Also, if you do not need the parameter like
           * below you could use mergeMapTo instead.
           * ex. mergeMapTo(ajax.getJSON(API_URL))
           */
          mergeMap(() => ajax.getJSON(API_URL))
        )
        // { userId: 1, id: 1, ...}
        .subscribe(console.log);
  }
}
