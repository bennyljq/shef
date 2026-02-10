export interface ChefProfile {
  id: string;
  name: string;
  archetype: string;
  description: string[];
  color: string;
  initials: string;
  imageUrl: string; // New field
}
export interface Ingredient {
  id: string;
  name: string;
  type: string;
  rarity: string;
  basePrice: number;
  flavorProfile: string[];
  masteryLevel: number;
  isDiscovered: boolean;
  heatLevel?: number; // 0 to 5 scale for chili peppers
  nutrition?: {
    servingSize: number;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    sodium: number; // mg
    sugar: number;  // g
  };
}