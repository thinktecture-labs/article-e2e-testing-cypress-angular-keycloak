import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-badge',
  templateUrl: 'badge.component.html',
  styleUrls: ['badge.component.scss'],
})

export class BadgeComponent {
  @Input() value?: number;
}
