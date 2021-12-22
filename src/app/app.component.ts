import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'gke-angular';
  loadedPosts = [];
  
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.onFetchPosts();
  }
  
  onCreatePost(postData: { title: string; content: string }) {
  this.http
      .post(
        'http://34.135.235.174/user/retreivedata',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
  
  onFetchPosts() {
    // Send Http request
    this.http.get('http://34.135.235.174/user/retreivedata')
    .subscribe(posts=>{
      console.log(posts);
    });
  }

  onClearPosts() {
    
  }
  
}
