import React from 'react'

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/tnguyen77/',
      icon: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
    },
    {
      url: 'https://github.com/jwin-sudo',
      icon: 'https://img.icons8.com/ios-filled/50/000000/github.png',
    },
    {
      url: 'https://www.instagram.com/_james.ng__/',
      icon: 'https://img.icons8.com/ios-filled/50/000000/instagram.png',
    },
  ]

  return (
    <div className='social-media-links'>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              <img src={link.icon} alt={`${link.name} icon`} /> {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialMediaLinks
