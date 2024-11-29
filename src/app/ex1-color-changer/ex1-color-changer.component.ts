import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './ex1-color-changer.component.html',
  styleUrls: ['./ex1-color-changer.component.css']
})
export class ColorChangerComponent {
  defaultColor: string = 'lightgray'; // Couleur par défaut du div
  currentColor: string = this.defaultColor; // Couleur actuelle du div

  // Méthode appelée lors de la saisie dans l'input
  updateColor(event: Event): void {
    const input = event.target as HTMLInputElement; // Cast l'événement pour accéder à la valeur
    this.currentColor = input.value; // Met à jour la couleur
  }

  resetColor(input: HTMLInputElement): void {
    input.value = ''; // Réinitialise la valeur de l'input
    this.currentColor = this.defaultColor; // Remet la couleur par défaut au div
  }
  
}
