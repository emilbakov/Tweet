import React,{ useState} from 'react'
import {TweetList} from './list'
import {TweetCreate} from './create'




export function TweetComponent(props) {
    console.log(props)
    
    const canTweet =props.canTweet === "false" ? false : true    
    const [newTweets, setNewTweets]= useState([])
    const handleNewTweets =  (newTweet) => {
      let tempNewTweets =[...newTweets]
      tempNewTweets.unshift(newTweet)
      setNewTweets(tempNewTweets)      
    }   

    return <div className={props.className}>
              {canTweet === true &&<TweetCreate didTweet={handleNewTweets} div className='col-12 mb-3' />}
          <TweetList newTweets={newTweets} {...props} />
        </div>    
}
  



