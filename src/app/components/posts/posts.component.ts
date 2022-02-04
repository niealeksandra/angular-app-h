import { Component, OnInit, Output } from '@angular/core';
import { UserPostsService } from 'src/app/services/user-posts.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { DataSharingService } from 'src/app/services/data-sharing.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Output() item: Object = []
  
  posts: any;
  comments: any;
  comment: any;

  // page counter
  page: number = 1;

  // Collapse comments
  public isCollapsed = true;

  // Icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor( 
    private userPostsService: UserPostsService,
    private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    // check if posts are on DataSharingService or save data to service
    this.dataSharingService.posts$.subscribe( value => {
      this.posts = value
        if (this.posts.length == 0) {
          this.getPosts(this.page.toString());
        }
    });
    // this.getPosts(this.page.toString())
  }

    // get posts from service
    getPosts(p: string) {
      this.userPostsService.getPosts(p).subscribe((data) => {
        this.posts = data
        this.getComm(this.posts.data)
        //save it to sharing service
        this.dataSharingService.isPosts.next(this.posts);
      })
    }

    // filter posts and assign comments from api for every posts
    getComm(data: any) {
      for (let i = 0; i < data.length; i++) {
        this.getComments(data[i].id, i)
      }
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

        //change page 
    changePage(e: any) {
      if (e === 'next' && this.page < this.posts.meta.pagination.pages) {
        this.page++
        this.getPosts(this.page.toString())
      }
      if (e === 'prev' && this.page > 1) {
        this.page--
        this.getPosts(this.page.toString())
      }
    }

}
