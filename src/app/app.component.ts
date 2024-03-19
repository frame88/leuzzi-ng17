import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class=''></div>
    <div></div>
    <div></div>
    <div></div>
  `,
  styles: `
  // background-images.component.scss
.background-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .background-image {
    position: absolute;
    height: 100%;
    background-size: cover;
    background-position: center;
    animation: rotateImage 20s infinite linear;
    z-index: -1;

    // Aggiungi qui il tuo testo o altri stili specifici
    p {
      position: absolute;
      z-index: 2;
      color: white;
      font-size: 20px;
    }
  }
}

@keyframes rotateImage {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  `,
})
export class AppComponent {
  title = 'leuzzi-ng17';
}
