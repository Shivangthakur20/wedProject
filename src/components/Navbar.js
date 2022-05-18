import React from 'react'
import "../styles/Navbar.css"


const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);

const Navbar = () => {
  return (

    <div className='nav'>
  
    
    <p className='headtext'>SHIVANG WEDS MEENAKSHI 
     </p>
     <p className='space'>--</p>
     <p className='date'>  (8-July and 9-July)</p>
    
    
    </div>
    
    
    


    

  )
}

export default Navbar