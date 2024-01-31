import React from 'react'
import "./Navigation.css"

function Navigation() {
    function reloadPage(){
        window.location.reload();
    }

  return (
    <div className='nav'>
        <div className='logosearch'>
            <button className='snap_b' type='button' onClick={reloadPage}> 
                <img className='logo' src='images/snapchat.png' alt='logo'></img>
            </button>
            <div className='searchinput'>
                <img className='searchimg' src='/images/search.png' alt='search'></img>
                <input type='search' placeholder='Search'></input>
            </div>
        </div>
        <div className='slsc'>
            
            <button className='but'>
                <img className='stories' src='/images/stories.png' alt='stories'></img>
                <p> Stories</p>
            </button>
            <button className='but'>
                <img className='spotlight' src='/images/spotlight.png' alt='spotlight'></img>
                <p>Spotlight</p>
            </button>
            <button className='but'>
                <img className='chat' src='/images/chat.JPG' alt='chat'></img>
                <p> Chat</p>
            </button>
            <button className='but'>
                <img  className='lenses' src='/images/lenses.png' alt='lenses'></img>
                <p> Lenses</p>
            </button>
        </div>
        <div className='rightpane'>

            <button className='menu'>
                <img className='dots' src='./images/dots.png' alt='dots'></img>
            </button>
            <button className='snapads b1'>
                Snapchat Ads
            </button>
            <button className='dwnl b1'>
                Download
            </button>
        </div>
    </div>
  )
}

export default Navigation
