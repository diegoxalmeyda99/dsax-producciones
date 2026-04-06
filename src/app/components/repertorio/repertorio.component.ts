import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repertorio',
  standalone: true, // 👈 CLAVE
  imports: [CommonModule],
  templateUrl: './repertorio.component.html',
  styleUrls: ['./repertorio.component.css']
})

export class RepertorioComponent {

  showModal = false;
  currentSongs: string[] = [];
  currentTitle = '';

  repertorio: any = {
    bachata: [
      'Juan Luis Guerra - Bachata Rosa',
      'Juan Luis Guerra - Burbujas de Amor',
      'Chayanne - Bailando Bachata',
      'Manuel Turizo - La Bachata'
    ],
    balada: [
      'Ed Sheeran - Perfect',
      'Christina Perri - A Thousand Years',
      'Sin Bandera - Entra en mi vida'
    ],
    bolero: [
      'Bésame Mucho',
      'Sabor a mí',
      'La Barca'
    ],
    latin: [
      'Despacito',
      'Provenza',
      'Hawái'
    ],
    rock: [
      'Flaca',
      'Lamento Boliviano',
      'Corazón Espinado'
    ],
    salsa: [
      'Lluvia',
      'Idilio',
      'Amores como el nuestro'
    ],
    cumbia: [
      'Cariñito',
      'Mix Colombiana',
      'Grupo 5 - Amor de mis amores'
    ],
    jazz: [
      'Fly Me to the Moon',
      'Take Five',
      'Summertime'
    ],
    personalizado: [
      'Canción especial para tu evento',
      'Primera canción de boda',
      'Tema personalizado solicitado por el cliente'
    ],
  };

  openModal(tipo: string) {
    this.currentSongs = this.repertorio[tipo] || [];
    this.currentTitle = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}