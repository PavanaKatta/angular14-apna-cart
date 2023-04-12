import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/product';
// import { ProductService } from '../../services/product.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  event_list = [
    {
      event: ' Event 1',
      eventLocation: 'Pickles',
      eventDescription: 'Yummy pickle at your door step',
      img: 'https://s3.amazonaws.com/indiafoodnetwork/wp-content/uploads/2021/01/26110731/variety-of-homemade-pickled-food-8X69U86-1.jpg',
    },
    {
      event: ' Event 2',
      eventLocation: 'Mangalore Pickles',
      eventDescription: 'Mangalore yummy pickles',
      img: 'https://media.istockphoto.com/id/185065365/photo/home-canning-preserving-pickling-food-stored-on-wooden-storage-shelves.jpg?s=612x612&w=0&k=20&c=Cn-snZAa2jja4ZuPVgTGQZNNvj-IbunTyyp-AKBbiy8=',
      eventEndingDate: new Date('2019/07/30'),
    },
    {
      event: ' Event 3',
      eventLocation: 'Veggy Pickles',
      eventDescription: 'Veggy pickles for desi masala',
      img: 'https://media.istockphoto.com/id/1155951289/photo/preserved-vegetables-in-glass-jars.jpg?s=612x612&w=0&k=20&c=xYOicDXD-EOCJSsLhtzJcUnaitfHGxXGSYTtcBQ7IU0=',
    },
  ];

  upcoming_events = this.event_list;
  //.filter( event => event.eventStartDate > new Date());
  // past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  // current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))

  // constructor(private productService: ProductService) {}

  constructor() {}

  ngOnInit(): void {
    //    this.getProducts();
  }

  // getProducts() {
  //   this.productService.getProducts().subscribe((x) => {
  //     this.products = x.filter((x) => x.category == 'electronics');
  //     console.log(x);
  //   });
  // }
}
