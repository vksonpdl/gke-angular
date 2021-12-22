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
  onCreatePost(postData: { title: string; content: string }) {}
  
  onFetchPosts() {
    // Send Http request
    this.http.get('http://34.135.235.174/user/retreivedata')
    .subscribe(posts=>{
      console.log(posts);
    });
  }

  onClearPosts() {
    // Send Http request
  }
  
}
