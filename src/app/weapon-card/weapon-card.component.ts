import { Component, Input, OnInit } from '@angular/core';
import { WeaponData } from '../weapon-data';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.scss'],
})
export class WeaponCardComponent implements OnInit {
  @Input() weapon: WeaponData;
  constructor() {}

  ngOnInit(): void {}
}
