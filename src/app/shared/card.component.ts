import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card-site rounded bg-emanuela">
      <button class="rounded title p2">
        <a href="https://emanuelasandu.com/" target="_blank">
          {{title}} <i class="fa-solid fa-globe"></i>
        </a>
      </button>
      <div class="mt2 p2 disappear">
        <p class="descrizione text-start">{{description}}</p>
      </div>
      <div class="disappear">
        <a target="_blank" class="look" [href]="url">Guarda il sito <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  `,
  styles: ``
})
export class CardComponent {
  @Input() title: string = '';
  @Input() url: string = '';
  @Input() description: string = '';
}
