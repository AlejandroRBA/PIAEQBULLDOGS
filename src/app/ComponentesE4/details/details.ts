import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class Details implements OnInit {
  id: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id')!);
    });
  }
}
