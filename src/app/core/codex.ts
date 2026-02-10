import { Injectable, signal } from '@angular/core';
import { Ingredient } from './models';

// Extend the interface slightly for the Codex view
export interface CodexEntry extends Ingredient {
  isDiscovered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Codex {
  
  ingredients = signal<CodexEntry[]>([
    // --- PROTEINS ---
    { 
      id: 'i_egg', name: 'Egg', type: 'protein', rarity: 'common', 
      basePrice: 2, flavorProfile: ['rich'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 50, calories: 72, protein: 6, fat: 5, carbs: 0.4, sodium: 71, sugar: 0.2 } 
    },
    { 
      id: 'i_bacon', name: 'Back Bacon', type: 'protein', rarity: 'common', 
      basePrice: 4, flavorProfile: ['salty', 'savory'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 28, calories: 110, protein: 10, fat: 7, carbs: 0.1, sodium: 540, sugar: 0 } 
    },
    { 
      id: 'i_sausage', name: 'Banger', type: 'protein', rarity: 'common', 
      basePrice: 3, flavorProfile: ['savory', 'fatty'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 75, calories: 230, protein: 9, fat: 20, carbs: 2, sodium: 600, sugar: 1 } 
    },
    { 
      id: 'i_chicken_breast', name: 'Chicken Breast', type: 'protein', rarity: 'common', 
      basePrice: 5, flavorProfile: ['mild', 'savory'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 150, calories: 165, protein: 31, fat: 3.6, carbs: 0, sodium: 74, sugar: 0 } 
    },
    { 
      id: 'i_wagyu', name: 'Wagyu Beef', type: 'protein', rarity: 'legendary', 
      basePrice: 50, flavorProfile: ['umami', 'rich'], masteryLevel: 0, isDiscovered: true, 
      heatLevel: 0,
      nutrition: { servingSize: 100, calories: 330, protein: 18, fat: 28, carbs: 0, sodium: 60, sugar: 0 } 
    },
    
    // --- PRODUCE ---
    { 
      id: 'i_rice', name: 'Jasmine Rice', type: 'produce', rarity: 'common', 
      basePrice: 1, flavorProfile: ['neutral', 'sweet'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 158, calories: 205, protein: 4, fat: 0.4, carbs: 45, sodium: 1, sugar: 0.1 } // Cooked cup
    },
    { 
      id: 'i_tomato', name: 'Tomato', type: 'produce', rarity: 'common', 
      basePrice: 2, flavorProfile: ['acidic', 'sweet'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 120, calories: 22, protein: 1, fat: 0.2, carbs: 5, sodium: 6, sugar: 3 } 
    },
    { 
      id: 'i_mushroom', name: 'Mushroom', type: 'produce', rarity: 'common', 
      basePrice: 3, flavorProfile: ['earthy'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 85, calories: 15, protein: 2, fat: 0.2, carbs: 2, sodium: 4, sugar: 1 } 
    },
    { 
      id: 'i_chili', name: 'Thai Chili', type: 'produce', rarity: 'common', 
      basePrice: 1, flavorProfile: ['spicy'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 4, // Very Hot!
      nutrition: { servingSize: 5, calories: 2, protein: 0.1, fat: 0, carbs: 0.4, sodium: 0, sugar: 0.3 } 
    },
    { 
      id: 'i_truffle', name: 'Black Truffle', type: 'produce', rarity: 'legendary', 
      basePrice: 80, flavorProfile: ['earthy', 'aromatic'], masteryLevel: 0, isDiscovered: false,
      heatLevel: 0,
      nutrition: { servingSize: 10, calories: 28, protein: 2, fat: 0.5, carbs: 0, sodium: 3, sugar: 0 } 
    },
    
    // --- SPICES ---
    { 
      id: 'i_salt', name: 'Sea Salt', type: 'spice', rarity: 'common', 
      basePrice: 1, flavorProfile: ['salty'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 1, calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 387, sugar: 0 } 
    },
    { 
      id: 'i_wasabi', name: 'Fresh Wasabi', type: 'spice', rarity: 'rare', 
      basePrice: 15, flavorProfile: ['pungent', 'spicy'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 3, // Nasal heat, distinct from chili
      nutrition: { servingSize: 10, calories: 10, protein: 0.5, fat: 0, carbs: 2, sodium: 2, sugar: 0 } 
    },
    { 
      id: 'i_saffron', name: 'Saffron', type: 'spice', rarity: 'rare', 
      basePrice: 20, flavorProfile: ['floral'], masteryLevel: 0, isDiscovered: true,
      heatLevel: 0,
      nutrition: { servingSize: 0.1, calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 0, sugar: 0 } 
    }
  ]);
  
  // Helper to get stats
  getDiscoveryProgress() {
    const total = this.ingredients().length;
    const found = this.ingredients().filter(i => i.isDiscovered).length;
    return { found, total, percent: Math.round((found / total) * 100) };
  }
}