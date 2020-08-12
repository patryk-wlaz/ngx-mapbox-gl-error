import { Component } from '@angular/core';

const localisationsMock = [ // TODO: remove mock
  [20.995921790599823, 52.20451647814114],
  [22.53969669342041, 51.25428746830006],
  [2.2937393188476562, 48.85861640881589],
  [85.5615234375, 37.56199695314352],
];
@Component({
  selector: 'app-challenges-map',
  templateUrl: './challenges-map.component.html',
  styleUrls: ['./challenges-map.component.scss'],
})
export class ChallengesMapComponent {
  challenges = localisationsMock;
}
