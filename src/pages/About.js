import React from 'react'
import NavBar from '../components/NavBar'

function About() {
  return (
    <div className="about">
    <header>
        <NavBar />
    </header>
    <h1>About</h1>
    <h3 className="about-header">Introduction</h3>
    <p>Welcome to the Travel Diary App, your ultimate companion in documenting your adventures across the globe! Are you an avid explorer with a passion for traversing new horizons? Look no further! Our app is tailor-made for travel enthusiasts like you who love to wander, explore, and soak in the beauty of diverse cultures and landscapes.</p>
    <p>With the Travel Diary App, you can effortlessly keep track of every country you've visited, creating a colorful mosaic of your global journey. From bustling cities to serene beaches, each destination holds a special place in your heart, and now, you can cherish those memories with just a tap of your finger.</p>
    <h3 className="about-header">Features</h3>
    <p>Our app allows you to personalize your experience by marking your favorite countries, ensuring that you never forget those extraordinary places that captured your soul. Whether it's savoring delicious street food in Thailand or marveling at ancient ruins in Greece, your travel tales are meant to be celebrated and shared.</p>
    <h3 className="about-header">Conclusion</h3>
    <p>So, what are you waiting for? Embark on a digital voyage with the Travel Diary App and relive your most cherished travel moments anytime, anywhere. Let's turn your wanderlust into wonderful memories, one country at a time!</p>
    </div>
  )
}

export default About

