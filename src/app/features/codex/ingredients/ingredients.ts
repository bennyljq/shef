import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Codex, CodexEntry } from '../../../core/codex';
import { Card } from '../../card/card';
import { CommonModule } from '@angular/common'; // Needed for animations/classes

@Component({
  selector: 'app-ingredients-codex',
  standalone: true,
  imports: [Card, CommonModule],
  templateUrl: './ingredients.html',
  styleUrl: './ingredients.scss'
})
export class IngredientsCodex {
  private router = inject(Router);
  protected codex = inject(Codex);

  filterType = signal<string>('all');
  
  // Track the ID of the expanded card
  selectedId = signal<string | null>(null);

  visibleIngredients = computed(() => {
    const type = this.filterType();
    const list = this.codex.ingredients();
    return type === 'all' ? list : list.filter(i => i.type === type);
  });

  // Helper to get the full object of the selected item
  selectedIngredient = computed(() => {
    return this.codex.ingredients().find(i => i.id === this.selectedId());
  });

  goHome() {
    this.router.navigate(['/']);
  }

  setFilter(type: string) {
    this.filterType.set(type);
  }

  selectCard(id: string) {
    this.selectedId.set(id);
  }

  closeSelection() {
    this.isFlipped.set(false);
    this.selectedId.set(null);
  }

  // New Signal: Tracks if the expanded card is showing its back
  isFlipped = signal(false);

toggleFlip() {
  const item = this.selectedIngredient();
  if (!item || !item.isDiscovered) {
    return;
  }
  this.isFlipped.update(v => !v);
}
}