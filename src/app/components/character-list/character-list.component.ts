import { Component, OnInit } from '@angular/core';
import { CharacterDetail } from 'src/app/model/character-detail';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: CharacterDetail[] = [];
  constructor(private dataServ: DataService){}

  ngOnInit(): void {
    // this.dataServ.getAllCharacters().subscribe(characters => this.characters = characters)
    this.dataServ.allCharacters.subscribe(chars => this.characters = chars)
  }

}
