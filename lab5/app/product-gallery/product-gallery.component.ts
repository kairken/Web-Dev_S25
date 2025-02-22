import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  // Для старой галереи можно использовать статический массив товаров
  products = [
    {
      id: 1,
      name: 'Продукт 1',
      description: 'Описание продукта 1',
      rating: 4.5,
      imageUrl: 'assets/product1.jpg',
      link: 'https://kaspi.kz/shop/product/1'
    },
    {
      id: 2,
      name: 'Продукт 2',
      description: 'Описание продукта 2',
      rating: 4.0,
      imageUrl: 'assets/product2.jpg',
      link: 'https://kaspi.kz/shop/product/2'
    },
    {
      id: 3,
      name: 'Продукт 3',
      description: 'Описание продукта 3',
      rating: 3.5,
      imageUrl: 'assets/product3.jpg',
      link: 'https://kaspi.kz/shop/product/3'
    },
    {
      id: 4,
      name: 'Продукт 4',
      description: 'Описание продукта 4',
      rating: 4.8,
      imageUrl: 'assets/product4.jpg',
      link: 'https://kaspi.kz/shop/product/4'
    },
    {
      id: 5,
      name: 'Продукт 5',
      description: 'Описание продукта 5',
      rating: 4.2,
      imageUrl: 'assets/product5.jpg',
      link: 'https://kaspi.kz/shop/product/5'
    },
    {
      id: 6,
      name: 'Продукт 6',
      description: 'Описание продукта 6',
      rating: 3.8,
      imageUrl: 'assets/product6.jpg',
      link: 'https://kaspi.kz/shop/product/6'
    },
    {
      id: 7,
      name: 'Продукт 7',
      description: 'Описание продукта 7',
      rating: 4.0,
      imageUrl: 'assets/product7.jpg',
      link: 'https://kaspi.kz/shop/product/7'
    },
    {
      id: 8,
      name: 'Продукт 8',
      description: 'Описание продукта 8',
      rating: 5.0,
      imageUrl: 'assets/product8.jpg',
      link: 'https://kaspi.kz/shop/product/8'
    },
    {
      id: 9,
      name: 'Продукт 9',
      description: 'Описание продукта 9',
      rating: 3.9,
      imageUrl: 'assets/product9.jpg',
      link: 'https://kaspi.kz/shop/product/9'
    },
    {
      id: 10,
      name: 'Продукт 10',
      description: 'Описание продукта 10',
      rating: 4.3,
      imageUrl: 'assets/product10.jpg',
      link: 'https://kaspi.kz/shop/product/10'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  shareProduct(product: any): void {
    const shareUrl = encodeURIComponent(product.link);
    const shareText = encodeURIComponent(`Посмотрите этот продукт: ${product.name}`);
    const telegramUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
    window.open(telegramUrl, '_blank');
  }
}
