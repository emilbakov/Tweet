import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TweetComponent,TweetDetailComponent } from './tweets';

const appEl =document.getElementById('root')
if (appEl){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appEl
  );
}

const e = React.createElement
const tweetsEl= document.getElementById('tweetme')
if (tweetsEl) {
  console.log(tweetsEl.dataset)
  ReactDOM.render(e(TweetComponent, tweetsEl.dataset), tweetsEl    
  );

}


const TweetDetailElements = document.querySelectorAll(".tweetme-detail")
TweetDetailElements.forEach(container=>{
  ReactDOM.render(e(TweetDetailComponent, container.dataset), container);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
