import { Component, Input } from '@angular/core';
import { filmI } from 'src/app/models/interface';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @Input () infoFilm!: filmI;
}

