import { Component, Input } from '@angular/core';
import { allFilmsI } from "../../models/interface"


@Component({
  selector: 'app-info-films',
  templateUrl: './info-films.component.html',
  styleUrls: ['./info-films.component.css']
})
export class InfoFilmsComponent {
  @Input() infoAllFilms!: allFilmsI;
}
