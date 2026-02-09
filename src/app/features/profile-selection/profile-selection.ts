import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChefProfile } from '../../core/models';

@Component({
  selector: 'app-profile-selection',
  standalone: true,
  imports: [],
  templateUrl: './profile-selection.html',
  styleUrl: './profile-selection.scss'
})
export class ProfileSelection {
  private router = inject(Router);
  
  chefs: ChefProfile[] = [
    {
      id: 'mathew',
      name: 'Mathew Kwok',
      archetype: 'Asian Home Cook',
      description: [
        'Master of comfort food.',
        'Starts with: Rice Cooker & Soy Sauce.',
        'Passive: +10% score on "Steamed" dishes.' 
      ],
      color: '#e74c3c',
      initials: 'MK',
      imageUrl: 'assets/chefs/mat.jpg'
    },
    {
      id: 'roberto',
      name: 'Roberto Carlost',
      archetype: 'Food Truck Owner',
      description: [
        'King of the carne asada.',
        'Starts with: Flat Top Grill & Corn Tortillas.',
        'Passive: High heat builds "Char" multiplier.'
      ],
      color: '#f1c40f',
      initials: 'RC',
      imageUrl: 'assets/chefs/roberto.png'
    },
    {
      id: 'balaji',
      name: 'Balaji Krishnan',
      archetype: 'Street Food Vendor',
      description: [
        'Spice alchemist.',
        'Starts with: Clay Tandoor & Spice Box.',
        'Passive: Spices trigger double "Heat" effects.'
      ],
      color: '#9b59b6',
      initials: 'BK',
      imageUrl: 'assets/chefs/balaji.png'
    }
  ];
  
  selectedChef = signal<ChefProfile | null>(null);
  
  openModal(chef: ChefProfile) {
    this.selectedChef.set(chef);
  }
  
  closeModal() {
    this.selectedChef.set(null);
  }
  
  confirmSelection() {
    console.log('Selected Chef:', this.selectedChef()?.name);
    this.closeModal();
  }
  
  goHome() {
    this.router.navigate(['/']);
  }
}