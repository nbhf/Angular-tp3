import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './ex5-mini-word.component.html',
  styleUrls: ['./ex5-mini-word.component.css']
})
export class Ex5MiniWordComponent {
  textColor: string = ''; // Couleur du texte
  fontSize: number = 23; // Taille du texte
  fontFamily: string = 'Arial'; // Police par défaut

  // Liste des polices disponibles
  fonts: string[] = ['Arial',  'Verdana', 'Garamond'];
}
