import { Component, OnInit } from '@angular/core';
import { WeaponData } from '../weapon-data';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.scss'],
})
export class WeaponListComponent implements OnInit {
  constructor() {}
  weapons: WeaponData[] = [];
  ngOnInit(): void {
    let weapon1 = new WeaponData(
      'Two-Handed Sword',
      ['Two-Handed', 'Heavy'],
      6,
      '2d6',
      'STR',
      'Slashing'
    );

    let weapon2 = new WeaponData(
      'Long Bow',
      ['Ammunition', 'Heavy', 'Ranged', 'Two-Handed'],
      2,
      '1d8',
      'DEX',
      'Piercing'
    );

    let weapon3 = new WeaponData(
      'Club',
      ['Light'],
      2,
      '1d4',
      'STR',
      'Bludgeoning'
    );

    this.weapons.push(weapon1);
    this.weapons.push(weapon2);
    this.weapons.push(weapon3);
  }
}
