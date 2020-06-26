import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    {
      text: 'Sobre',
      router: '/'
    },
    {
      text: 'Pagar',
      router: '/pagar'
    }
  ];

  socials = [
    {
      alt: 'Linkedin',
      href: 'https://www.linkedin.com/company/picpay',
      src: 'https://picpay.com/static/images/ico-lk.png'
    },
    {
      alt: 'Youtube',
      href: 'https://www.youtube.com/user/PicPay',
      src: 'https://picpay.com/static/images/ico-yt.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
