import { Component, OnInit } from '@angular/core';
import { combineLatest, take, timer } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.css']
})
export class CombinelatestComponent implements OnInit {

  timer1$ = timer(1000, 4000);
  timer2$ = timer(2000, 4000);
  timer3$ = timer(3000, 4000);

  ngOnInit(): void {

    combineLatest([this.timer1$, this.timer2$, this.timer3$])
    .pipe(take(6))
      .subscribe(([timer1, timer2, timer3]) => {
        console.log(
          `Timer One Latest: ${timer1},Timer Two Latest: ${timer2},Timer Three Latest: ${timer3}`
        );
      })
  }

}
