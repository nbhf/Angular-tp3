import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector:  'input[type="text"][appRainbow]' // Appliquer uniquement sur les inputs de type texte
})
export class RainbowDirective {
  // Tableau de couleurs hex
  //private colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  private colors: string[] = [ 
    '#FF0000', // Rouge
    '#FF7F00', // Orange
    '#FFFF00', // Jaune
    '#00FF00', // Vert
    '#0000FF', // Bleu
    '#4B0082', // Indigo
    '#9400D3'  // Violet
  ];

  // Utilisation de HostBinding pour changer le style dynamiquement
  @HostBinding('style.color') textColor: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';

  // Fonction pour sélectionner une couleur aléatoire dans le tableau
  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
    
    // Générer une couleur hexadécimale aléatoire
    //return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  // Utilisation de HostListener pour écouter l'événement `keyup`
  @HostListener('keyup') onKeyUp() {
    const randomColor = this.getRandomColor();
    this.textColor = randomColor; // Change la couleur du texte
    this.borderColor = randomColor; // Change la couleur de la bordure
  }
}
