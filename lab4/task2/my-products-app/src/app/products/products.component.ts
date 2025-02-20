import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=preview-large',
      name: 'Apple iPhone 14 128GB черный',
      description: 'Apple iPhone 14 – компактная модель с безрамочным дисплеем OLED 6.1 дюйма.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=preview-large',
      name: 'Samsung Galaxy S23 256GB',
      description: 'Samsung Galaxy S23 Ultra — смартфон, у которого есть все шансы стать легендой. В нем гармонично сочетаются стильный дизайн, материалы премиум-класса, топовая «начинка», камера профессионального уровня. Встроенный стилус S-Pen сделает новинку желанной покупкой для дизайнеров, художников и всех, кто любит использовать возможности смартфона на полную.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=preview-large',
      name: 'Xiaomi Redmi Note 12 Pro 5G 8 ГБ/256 ГБ черный',
      description: 'Смартфон Xiaomi Redmi Note 12 Pro оборудован 6.67-дюймовым дисплеем, который выполнен по AMOLED-технологии. Она способствует охвату широкой гаммы оттенков и естественной цветопередаче. Частота обновления 120 Гц исключает задержки ввода во время прохождения динамичных игр и просмотра кинолент. Биометрическая защита задействует отпечаток пальца и анализирует черты лица.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h36/86064645963806.png?format=preview-large',
      name: 'Ноутбук HP Pavilion 15.6" / 16 Гб / SSD 512 Гб / Win 11 / 15-eh3056ci / A19W6EA',
      description: 'Reliable laptop for everyday use with Intel i5.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3056ci-a19w6ea-119606499/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h1e/85195470897182.jpg?format=gallery-medium',
      name: 'Ноутбук DELL Inspiron 15 3530 15.6" / 16 Гб / SSD 512 Гб / Linux / 210-BGCI',
      description: 'Compact laptop for work and study.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/dell-inspiron-15-3530-15-6-16-gb-ssd-512-gb-linux-210-bgci-116700970/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h1f/85207910383646.png?format=gallery-medium',
      name: 'Sony PlayStation 5',
      description: 'Next generation console for immersive gaming.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-geimpad-zarjadnaja-stantsija-gripsy-fifa23-ps4-ufc4-mortal-kombat-11-ultimate-gta5-call-of-duty-cold-war-need-for-speed-heat-116749438/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
      name: 'Microsoft Xbox Series X',
      description: 'Игры, созданные с использованием набора для разработки Xbox Series X|S, демонстрируют значительное сокращение времени загрузки и потрясающие визуальные эффекты с частотой до 120 кадров в секунду.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha8/hef/87166074683422.jpg?format=gallery-medium',
      name: 'Adidas Running Shoes',
      description: 'Comfortable and stylish shoes for running.',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/krossovki-adidas-galaxy-7-running-shoes-galaxy-7-running-shoes-rozovyi-39-123747603/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hb7/64055416487966.jpg?format=gallery-medium',
      name: 'Кроссовки Nike Air Max белый',
      description: 'Женские кроссовки NIKE черного цвета с эластичной внутренней конструкцией для индивидуальной посадки.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/krossovki-nike-air-max-ah8050-005-new-159-belyi-43-101440595/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/hf5/86202406764574.png?format=gallery-medium',
      name: 'Телевизор LG OLED55B4RLA 140 см черный',
      description: 'Невероятно тонкий дизайн телевизора LG OLED55B4RLA позволяет сосредоточить внимание на всем экране, не отвлекаясь на посторонние детали, и гармонично впишется в интерьер вашего дома.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lg-oled55b4rla-140-sm-chernyi-120091495/?c=750000000'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Redirects the user to Whatsapp with the product link
  shareOnWhatsapp(product: Product): void {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(product.link)}`;
    window.open(url, '_blank');
  }

  // Redirects the user to Telegram with the product link
  shareOnTelegram(product: Product): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(url, '_blank');
  }
}
