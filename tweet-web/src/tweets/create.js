import React from 'react'

import {apiTweetCreate} from './lookup'

export function TweetCreate(props){
    const {didTweet} =props    
    const textAreaRef = React.createRef()    
    const handleBackendUpdate =  (response,status) => {
      if (status===201) {        
        didTweet(response)
      } else {
        console.log(response)
        alert("An error occured please try again")
      }       

    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event) 
        
        const newVal = textAreaRef.current.value
        
        console.log(newVal, 'new value')
        
        apiTweetCreate(newVal,handleBackendUpdate)
                
        
        textAreaRef.current.value='' 
    }

    return <div className={props.className}>
                <div className='col-12 mb-3'>
                    <form onSubmit={handleSubmit}>
                        <textarea ref={textAreaRef} required={true} className='form-control' name='tweet'>
                        </textarea>
                        <button type='submit' className='btn btn-primary my-3'>Tweet</button>    
                    </form>
                </div>          
            </div>    
}


  



