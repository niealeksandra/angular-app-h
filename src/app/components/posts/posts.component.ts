import { Component, OnInit } from '@angular/core';
import { UserPostsService } from 'src/app/services/user-posts.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any;
  comments: any;
  comment: any;

  // Collapse comments
  public isCollapsed = true;

  // Icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor( private userPostsService: UserPostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

    // get posts from service
    getPosts() {
      this.userPostsService.getPosts().subscribe((data) => {
        this.posts = data
        this.getComm(this.posts.data)
      })
    }

    // filter posts and assign comments from api for every posts
    getComm(data: any) {
      for (let i = 0; i < data.length; i++) {
        this.getComments(data[i].id, i)
      }
      console.log(this.posts)
    }

   // get comments from service and assign it for every posts
    getComments(id: string, i:number) {
      this.userPostsService.getComments(id).subscribe((data) => {
        this.comment = data
        this.posts.data[i].comments = this.comment
      })
    }

    // show only one section of comments by click, 
    showComments(id: string) {
      let postsData = this.posts.data;
      this.isCollapsed = !this.isCollapsed;
      let index = postsData.findIndex((item: any) => item.id === id)
      if (this.posts.data[index].show == true) {
        this.posts.data[index].show = false
      } else if (this.posts.data[index].show == false) {
        this.posts.data[index].show = true
      } else {
        this.posts.data[index].show = true
      }
    }

}
