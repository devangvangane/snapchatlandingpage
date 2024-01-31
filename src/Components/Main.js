import React from 'react'
import "./Main.css"

function Main() {
  return (
    <div className='mainbody'>
        <div className='leftpane'>
            <h1 className='heading'>
                Snapchat is now on the web!
            </h1>
            <p className='p1'>
                Chat, Snap, and video call your friends from wherever you are.
            </p>
            <p className='p2'>
                Message My AI, your personal chatbot sidekick!
            </p>
            <div className='buttondiv'>
                <button className='login'>
                    <img className='laptop' src='/images/laptop.png' alt='laptop'></img>
                    Login in to chat
                </button>

                <p>or</p>

                <button className='microsoft'>
                    <img src='/images/microsoft1.png' alt='microsft'></img>
                    <div>
                        <p>Get it from</p><b>Microsoft</b>
                    </div>
                </button>
            </div>
        </div>
        <div className='snapdiv'>
            <img src='/images/snapboy.png' alt='snapboy'></img>
        </div>
    </div>
  )
}

export default Main