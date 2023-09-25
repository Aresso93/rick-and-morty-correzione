import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  character?: CharacterDetail;

  constructor(private route:ActivatedRoute, private dataServ: DataService){
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.dataServ.getSingleCharacter(id).subscribe(char => this.character = char)
  }

  }


}
