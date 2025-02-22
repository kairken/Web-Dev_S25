import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  likes: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Телефоны (5 товаров)
    { id: 1, title: 'Телефон 1', description: 'Описание телефона 1', price: 300, likes: 0, category: 'Телефоны', imageUrl: 'assets/product1.jpg' },
    { id: 2, title: 'Телефон 2', description: 'Описание телефона 2', price: 400, likes: 0, category: 'Телефоны', imageUrl: 'assets/product2.jpg' },
    { id: 3, title: 'Телефон 3', description: 'Описание телефона 3', price: 500, likes: 0, category: 'Телефоны', imageUrl: 'assets/product3.jpg' },
    { id: 4, title: 'Телефон 4', description: 'Описание телефона 4', price: 600, likes: 0, category: 'Телефоны', imageUrl: 'assets/product4.jpg' },
    { id: 5, title: 'Телефон 5', description: 'Описание телефона 5', price: 700, likes: 0, category: 'Телефоны', imageUrl: 'assets/product5.jpg' },
    // Ноутбуки (5 товаров)
    { id: 6, title: 'Ноутбук 1', description: 'Описание ноутбука 1', price: 1000, likes: 0, category: 'Ноутбуки', imageUrl: 'assets/product6.jpg' },
    { id: 7, title: 'Ноутбук 2', description: 'Описание ноутбука 2', price: 1100, likes: 0, category: 'Ноутбуки', imageUrl: 'assets/product7.jpg' },
    { id: 8, title: 'Ноутбук 3', description: 'Описание ноутбука 3', price: 1200, likes: 0, category: 'Ноутбуки', imageUrl: 'assets/product8.jpg' },
    { id: 9, title: 'Ноутбук 4', description: 'Описание ноутбука 4', price: 1300, likes: 0, category: 'Ноутбуки', imageUrl: 'assets/product9.jpg' },
    { id: 10, title: 'Ноутбук 5', description: 'Описание ноутбука 5', price: 1400, likes: 0, category: 'Ноутбуки', imageUrl: 'assets/product10.jpg' },
    // Наушники (5 товаров)
    { id: 11, title: 'Наушники 1', description: 'Описание наушников 1', price: 50, likes: 0, category: 'Наушники', imageUrl: 'assets/product11.jpg' },
    { id: 12, title: 'Наушники 2', description: 'Описание наушников 2', price: 60, likes: 0, category: 'Наушники', imageUrl: 'assets/product12.jpg' },
    { id: 13, title: 'Наушники 3', description: 'Описание наушников 3', price: 70, likes: 0, category: 'Наушники', imageUrl: 'assets/product13.jpg' },
    { id: 14, title: 'Наушники 4', description: 'Описание наушников 4', price: 80, likes: 0, category: 'Наушники', imageUrl: 'assets/product14.jpg' },
    { id: 15, title: 'Наушники 5', description: 'Описание наушников 5', price: 90, likes: 0, category: 'Наушники', imageUrl: 'assets/product15.jpg' },
    // Часы (5 товаров)
    { id: 16, title: 'Часы 1', description: 'Описание часов 1', price: 150, likes: 0, category: 'Часы', imageUrl: 'assets/product16.jpg' },
    { id: 17, title: 'Часы 2', description: 'Описание часов 2', price: 160, likes: 0, category: 'Часы', imageUrl: 'assets/product17.jpg' },
    { id: 18, title: 'Часы 3', description: 'Описание часов 3', price: 170, likes: 0, category: 'Часы', imageUrl: 'assets/product18.jpg' },
    { id: 19, title: 'Часы 4', description: 'Описание часов 4', price: 180, likes: 0, category: 'Часы', imageUrl: 'assets/product19.jpg' },
    { id: 20, title: 'Часы 5', description: 'Описание часов 5', price: 190, likes: 0, category: 'Часы', imageUrl: 'assets/product20.jpg' },
  ];

  constructor() { }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }

  likeProduct(productId: number): void {
    this.products = this.products.map(p => {
      if (p.id === productId) {
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    });
  }
}
