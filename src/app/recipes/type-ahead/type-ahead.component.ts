import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, of, switchMap, tap } from 'rxjs';

const getContinents = (keys: string) =>
  [
    'africa',
    'antarctica',
    'asia',
    'australia',
    'europe',
    'north america',
    'south america'
  ].filter(e => e.indexOf(keys.toLowerCase()) > -1);
// e c'est chqaue e lment du tableau 
// est ce que la chaine saisie (keys) se traouve dans e si ou retourener [e,...]
const fakeContinentsRequest = (keys: string) =>
  of(getContinents(keys)).pipe(
    tap(_ => console.log(`API CALL at ${new Date()}`))
  );

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements AfterViewInit {


  @ViewChild('searchInput') input: ElementRef;
  @ViewChild('output') output: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        map((event: any) => event.target.value),
        distinctUntilChanged(),
        switchMap(fakeContinentsRequest),
        // switchMap((keys: string) => {
        //   return of( [
        //       'africa',
        //       'antarctica',
        //       'asia',
        //       'australia',
        //       'europe',
        //       'north america',
        //       'south america'
        //     ]
        //     .filter(e => e.indexOf(keys.toLowerCase()) > -1)
        //   )
        //   .pipe(
        //     tap(_ => console.log(`API CALL at ${new Date()}`))
        //   );
        // }),
        tap((c) => {
          this.output.nativeElement.innerText = c.join('\n');
        })
      )
      .subscribe();
  }
}
