import { Component, OnInit } from '@angular/core';

interface AdInterface {
  url: string;
  img: string;
}

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  ad: AdInterface;

  private readonly ads: AdInterface[] = [
    {
      img: 'https://via.placeholder.com/728x90.png/FFFF00/000000?text=Team+App+AD',
      url: 'https://hyland.com',
    },
    {
      img: 'https://via.placeholder.com/728x140.png/69bf4a/FFFFFF?text=Hyland+AD',
      url: 'https://hyland.com',
    },
    {
      img: 'https://via.placeholder.com/728x140.png/4287f5/000000?text=DeployDocs+Team+AD',
      url: 'https://hyland.com',
    },
    {
      img: 'https://via.placeholder.com/728x140.png/69bf4a/000000?text=To+jest+miejsce+na+Twoją+reklamę+AD',
      url: 'https://hyland.com',
    },
  ];

  constructor() {
    this.ad = this.getRandomAd();
  }

  ngOnInit(): void {}

  getRandomAd(): AdInterface {
    return this.ads[Math.floor(Math.random() * this.ads.length)];
  }
}
