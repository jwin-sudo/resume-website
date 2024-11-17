import React from 'react'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Interests from './components/Interests'
import SocialMediaLinks from './components/SocialMediaLinks'
import Eligibility from './components/Eligibility'
import './styles/App.css'

const App = () => (
  <div className='app'>
    <SocialMediaLinks />
    <Header />
    <Education />
    <Experience />
    <Skills />
    <Interests />
    <Eligibility />
  </div>
)

export default App
∏