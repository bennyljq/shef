import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../core/models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  data = input.required<Ingredient>();
  locked = input(false);
  
  // New Input: Controls the 3D rotation
  flipped = input(false); 
}