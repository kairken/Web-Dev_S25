import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule], // Обязательно добавляем CommonModule
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
      description: 'Корректирующая сыворотка Dark Spot Correcting Glow Serum против нарушения пигментации зарядит вашу кожу энергией, тонизирует кожу изнутри, а также выравнивает тон лица. ',
      rating: 4.9,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000'
    },
    {
      id: 2,
      name: 'Farmstay сыворотка All-In-One Collagen and Hyaluronic Acid Ampoule Anti-Wrinkle Whitening для лица 250 мл',
      description: 'Многофункциональная ампульная сыворотка с гиалуроновой кислотой и коллагеном FarmStay All In One Collagen and Hyaluronic Ampoule — великолепное средство для увлажнения и омоложения кожи. ',
      rating: 'нет',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h49/86609944150046.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/farmstay-syvorotka-all-in-one-collagen-and-hyaluronic-acid-ampoule-anti-wrinkle-whitening-dlja-litsa-250-ml-100028087/?c=750000000'
    },
    {
      id: 3,
      name: 'Dr. Althea крем 345 Relief для лица 50 мл',
      description: 'Восстанавливающий крем с ниацинамидом 345 Relief Cream - инновационное средство для ухода за кожей с постакне.',
      rating: 5,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000'
    },
    {
      id: 4,
      name: 'SKIN&LAB сыворотка Vitamin C Brightening для лица 30 мл',
      description: 'некомедогенное, отбеливающее, с витаминами',
      rating: 4.9,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/p3f/1607750.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/skin-lab-syvorotka-vitamin-c-brightening-dlja-litsa-30-ml-104829563/?c=750000000'
    },
    {
      id: 5,
      name: 'Eveline Cosmetics крем Рецепты Природы золотая пшеница для лица 125 мл',
      description: 'Инновационный, разработанный лабораторией Эвелин крем содержит невероятно ценный экстракт из ростков пшеницы, интенсивно увлажняющий гидрокомплекс и коктейль питательных витаминов. ',
      rating: 4.9,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h46/86698446487582.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/eveline-cosmetics-krem-retsepty-prirody-zolotaja-pshenitsa-dlja-litsa-125-ml-101041863/?c=750000000'
    },
    {
      id: 6,
      name: 'Beauty of Joseon крем Relief Sun Rice Probiotics SPF50 для лица 50 мл',
      description: 'Солнцезащитный крем с пробиотиками обеспечивает надёжную защиту от пагубных воздействий солнечных лучей, а также способствует успокаивающему и осветляющему действию, поможет восстановить микробиом и укрепить защитный слой кожи.',
      rating: 'нет',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h82/86609946542110.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/beauty-of-joseon-krem-relief-sun-rice-probiotics-spf50-dlja-litsa-50-ml-105587876/?c=750000000'
    },
    {
      id: 7,
      name: 'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
      description: 'Корректирующая сыворотка Dark Spot Correcting Glow Serum против нарушения пигментации зарядит вашу кожу энергией, тонизирует кожу изнутри, а также выравнивает тон лица. ',
      rating: 4.9,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000'
    },
    {
      id: 8,
      name: 'Dr. Althea крем Resveratrol 345 NA Intensive Repair для лица 50 мл',
      description: 'Корректирующая сыворотка Dark Spot Correcting Glow Serum против нарушения пигментации зарядит вашу кожу энергией, тонизирует кожу изнутри, а также выравнивает тон лица. ',
      rating: 4.8,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/haf/hf9/86626930917406.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-resveratrol-345-na-intensive-repair-dlja-litsa-50-ml-101506231/?c=750000000'
    },
    {
      id: 9,
      name: 'Dr.Ceuracle крем Pro Balance Biotics Moisturizer для лица 100 мл',
      description: 'Этот увлажняющий крем имеет идентичные коже ингредиенты, которые имитируют кожные выделения, увлажняет кожу, а также имеет функцию удерживать влагу. ',
      rating: 'нет',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h84/86609790009374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dr-ceuracle-krem-pro-balance-biotics-moisturizer-dlja-litsa-100-ml-100675870/?c=750000000'
    },
    {
      id: 10,
      name: 'Round Lab крем Birch Juice Moisturizing SPF50 для лица 50 мл',
      description: 'Солнцезащитный крем с березовым соком и гиалуроновой кислотой обеспечивает надежную защиту от ультрафиолетового излучения, при этом оказывает глубокую гидратацию, надолго удерживая влагу внутри, предупреждая обезвоженность кожи, помогая избавиться от сухости, шелушений, раздражений и зуда.',
      rating: 4.7,
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hcd/86663479197726.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000'
    },
  ];

  ngOnInit(): void { }

  shareProduct(product: any): void {
    const shareUrl = encodeURIComponent(product.link);
    const shareText = encodeURIComponent(`Посмотрите этот продукт: ${product.name}`);
    const telegramUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
    window.open(telegramUrl, '_blank');
  }
}
