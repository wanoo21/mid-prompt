import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'mid-prompt-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <mid-prompt-analog-welcome /> `,
})
export default class HomeComponent {}
