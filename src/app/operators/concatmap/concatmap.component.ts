import { Component, OnInit } from '@angular/core';
import { concatMap, delay, fromEvent, interval, noop, of, take } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  ngOnInit(): void {

    const source$ = of(2000, 1000);

    const example$ = source$
      .pipe(
        concatMap(val => of(`Delayed by: ${val} ms`)
          .pipe(
            delay(val)
          ))
      )

    example$.subscribe(val => {
      console.log(`With concatMap : ${val}`)
    })

    const source1$ = of('Hello', 'Goodbye');

    const examplePromise = (val: any) => new Promise(resolve => resolve(`${val} World!`));

    const example1$ = source1$.pipe(
      concatMap(val => examplePromise(val))
    )

    example1$.subscribe(val =>
      console.log('Example w/ Promise:', val)
    );


    const clicks$ = fromEvent(document, 'click');
    const result = clicks$.pipe(
      concatMap(event => interval(1000)
      .pipe(
        take(4)
      ))
    )

    result.subscribe(x => console.log(x));

    
  }
}
