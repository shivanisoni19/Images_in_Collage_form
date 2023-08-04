import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-collage',
  templateUrl: './image-collage.component.html',
  styleUrls: ['./image-collage.component.css']
})
export class ImageCollageComponent implements OnInit {
  images: any[] = [];
  page = 1;
  limit = 10; // Set the initial limit for infinite scroll
scrollDistance: any;
scrollUpDistance: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    const apiUrl = `https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`;
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.images = [...this.images, ...data];
      },
      (error) => {
        console.error('Error loading images:', error);
      }
    );
  }

  onScroll(): void {
    this.page++;
    this.loadImages();
  }
}
