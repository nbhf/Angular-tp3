import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-carte>',
  templateUrl: './ex2-carte.component.html',
  styleUrls: ['./ex2-carte.component.css'] // Fixed typo: 'styleUrl' -> 'styleUrls'
})
export class Ex2CarteComponent {
  // Data for the rotating card
  cardData = {
    nom: 'HASNAOUI',
    prenom: 'EMNA',
    job: 'Student',
    citation: "The best way to predict the future is to create it.",
    description: '', // Nouveau champ : description
    keywords: '', // Nouveau champ : mots-clés
    image: 'assets/rotating_card_profile2.png',
    coverImage: 'assets/rotating_card_thumb2.png',
    stats: {
      followers: 235,
      following: 114,
      projects: 35
    },
    socialLinks: {
      facebook: 'https://creative-tim.com',
      google: 'https://creative-tim.com',
      twitter: 'https://creative-tim.com'
    }
  };
}