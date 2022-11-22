import { Injectable } from '@angular/core';
import {Post} from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

         public posts : Post[] = [
                {
                        id: '1',
                        title: 'Black Train',
                        comments: ['the nice train'],
                        imageURL: 'https://pngimg.com/uploads/trian/small/trian_PNG16647.png'
                },
                {
                        id: '2',
                        title: 'Locomotive',
                        comments: ['Locomotive with smoke'],
                        imageURL: 'https://avatarfiles.alphacoders.com/582/58289.jpg'
                },
                {
                        id: '3',
                        title: 'Grey locomotive',
                        comments: ['Spectacular locomotive'],
                        imageURL: 'https://mcdn.wallpapersafari.com/318/26/26/eWaSz1.jpg'
                },
                {
                        id: '4',
                        title: 'Modern train',
                        comments: ['Nice train picture'],
                        imageURL: 'https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Acela_old_saybrook_ct_summer2_1.jpg'
                }
         ]    

  constructor() { }

  getPlaces(){
        return [...this.posts]
  }
  
  getPlace(placeId: string ){
     return {
        ...this.posts.find(post => {
                return post.id === placeId
        })
     }
  }
  
  addPlace(title: string, imageURL: string){
        this.posts.push({
                title,
                imageURL,
                comments: [],
                id: this.posts.length + 1 + ''
        })
  }

  delete(postId: string,){
        this.posts = this.posts.filter(post => {
                return post.id !== postId
        })
  }


}
