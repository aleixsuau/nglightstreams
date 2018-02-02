import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ls-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  message = 'CrowdSale starts in:';
  startDate: number;
  countInterval;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  @Input()
  start: number;

  constructor() { }

  ngOnInit() {
    this.startDate = this.start || 1521068400000; // new Date(this.start).getTime();

    this.countInterval = setInterval(() => {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = this.startDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(this.countInterval);
        this.message = 'CrowdSale ended, please contact us at info@lightstreams.io for more information :)';
      }
    }, 1000);
  }

}
