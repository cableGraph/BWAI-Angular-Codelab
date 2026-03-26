import { Component } from '@angular/core';
import { Scheduler } from './scheduler/scheduler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Scheduler],
  templateUrl: './app.html'
})
export class App {}