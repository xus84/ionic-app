import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts = [
        {
                id: '1',
                title: 'Black Train',
                comment:'the nice train',
                imageURL: 'https://pngimg.com/uploads/trian/small/trian_PNG16647.png'
        },
        {
                id: '2',
                title: 'Locomotive',
                comment:'Locomotive with smoke',
                imageURL: 'https://avatarfiles.alphacoders.com/582/58289.jpg'
        },
        {
                id: '3',
                title: 'Grey locomotive',
                comment:'Spectacular locomotive',
                imageURL: 'https://mcdn.wallpapersafari.com/318/26/26/eWaSz1.jpg'
        },
        {
                id: '4',
                title: 'Modern train',
                comment:'Nice train picture',
                imageURL: 'https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Acela_old_saybrook_ct_summer2_1.jpg'
        }
 ]
  constructor() { }

  ngOnInit() {
  }

}
