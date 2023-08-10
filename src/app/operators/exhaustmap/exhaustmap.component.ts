import { Component, OnInit } from '@angular/core';
import { delay, exhaustMap, interval, merge, of, take } from 'rxjs';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.css'],
})
export class ExhaustmapComponent implements OnInit {
  ngOnInit(): void {
    // Example 1: exhaustMap with interval
    // const sourceInterval$ = interval(1000);

    // const delayedInterval$ = sourceInterval$.pipe(delay(10), take(4));
    // merge(delayedInterval$, of(true))
    //   .pipe(
    //     exhaustMap((val) => {
    //       console.log('val:', val);
    //       return sourceInterval$.pipe(take(5));
    //     })
    //   )
    //   .subscribe(console.log);

    // Example 2: Another exhaustMap with interval

    const firstInterval = interval(1000).pipe(take(10));
    const secondInterval = interval(1000).pipe(take(2));

    firstInterval.pipe(
      exhaustMap( f => {
        console.log(`Emission Corrected of first interval: ${f}`);
        return secondInterval
      })
    ).subscribe(console.log)
  }

  // exhaustMap for login effect in @ngrx example app
  
  // Source https://github.com/ngrx/platform/blob/a9e522953832b09bb329bac4524637bc608c450a/example-app/app/auth/effects/auth.effects.ts#L18-L30
  // @Effect()
  // login$ = this.actions$.pipe(
  //   ofType(AuthActionTypes.Login),
  //   map((action: Login) => action.payload),
  //   exhaustMap((auth: Authenticate) =>
  //     this.authService
  //       .login(auth)
  //       .pipe(
  //         map(user => new LoginSuccess({ user })),
  //         catchError(error => of(new LoginFailure(error)))
  //       )
  //   )
  // );
}
