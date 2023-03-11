import React from 'react';
import { Link } from 'react-router-dom';
import './Forum.css';
import Navbar from './Navbar';
import  { useState } from 'react';

const profiles = [
  {
    name: 'Nancy Duarte',
    image: 'https://www.presentation-guru.com/wp-content/uploads/2016/05/nancy_duarte.jpg',
    link: 'https://www.linkedin.com/in/nancyduarte?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BJISwqByXTpaWXmhJwQc5CA%3D%3D'
  },
  {
    name: 'Ann Handley',
    image: 'https://blog.hubspot.com/hs-fs/hub/53/file-329705271-jpg/Bold_Talks_Images/AnnHandley.jpg',
    link: 'https://www.linkedin.com/in/annhandley?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B6xCum2J8RhKDdGZK9nlNPA%3D%3D'
  },
  {
    name: 'Gretchen Rubin',
    image: 'https://th.bing.com/th/id/OIP.3c7ZhRQqW3419K0rpRqj6QHaFS?w=221&h=180&c=7&r=0&o=5&pid=1.7',
    link: 'https://www.linkedin.com/in/gretchenrubin?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B6xCum2J8RhKDdGZK9nlNPA%3D%3D'
  },
  {
    name: 'Arianna Huffington',
    image: 'https://media.licdn.com/dms/image/C4D03AQHmPuoZ-4Jh6w/profile-displayphoto-shrink_800_800/0/1602549159611?e=1683763200&v=beta&t=5HJZYvDdJTVTvjKSFhmBfsBEHNz-Z5EkgdXDdDvfa4k',
    link: 'https://www.linkedin.com/in/ariannahuffington?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3B6xCum2J8RhKDdGZK9nlNPA%3D%3D'
  },
  {
    name: 'Liz Ryan',
    image: 'https://media.licdn.com/dms/image/C5603AQF4id6Yg2MJvQ/profile-displayphoto-shrink_800_800/0/1599111632027?e=1683763200&v=beta&t=PXKC05ZAWw4aU9-xNaNdI5Q5eaEW3m8mf8d8AVdI1ps',
    link: 'https://www.linkedin.com/in/lizryan?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D'
  },
  {
    name: 'Rachel Schall Thomas',
    image: 'https://media.licdn.com/dms/image/C5603AQH2ZHODNZ4fOw/profile-displayphoto-shrink_800_800/0/1580231904741?e=1683763200&v=beta&t=OwEt93b657JeXSgETU-xKkfNpGmpugSrYdu6t6GZnuk',
    link: 'https://www.linkedin.com/in/rsthomas?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D'
  },
  {
    name: 'Sallie Krawcheck',
    image: 'https://media.licdn.com/dms/image/C5603AQEuXso_iebCGg/profile-displayphoto-shrink_800_800/0/1654721783487?e=1683763200&v=beta&t=YtnQpJq9OQEPgoHPON_5PABuO8dWz5r_8M1gVT3U7qc',
    link: 'https://www.linkedin.com/in/salliekrawcheck?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D'
  },
  {
    name: 'Randi Zuckerberg',
    image: 'https://media.licdn.com/dms/image/C5603AQEY8Dx60kTB1w/profile-displayphoto-shrink_800_800/0/1650670416164?e=1683763200&v=beta&t=_p0maBAwKNlBMQZtd6HJUyUrCQ9z6AiuFcqfVvw3piI',
    link: 'https://www.linkedin.com/in/randizuckerberg?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D'
  },
  {
    name: 'Susan Cain',
    image: 'https://media.licdn.com/dms/image/D4E03AQFBzmOdlxeSPA/profile-displayphoto-shrink_800_800/0/1677516731131?e=1683763200&v=beta&t=osvnP2kvxzIOSqmFW-voKqCMr3jsmYObN7LsuT3keSw',
    link: 'https://www.linkedin.com/in/susancain?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Btbf2%2Fw0nQ42op0ezQgfLNw%3D%3D'
  }
];
function ForumLink() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: "blue" }}>
            Top Influential Women on LinkedIn 
            </a>
          </div>
        </nav>
  
        <div className="search-container">
          <label htmlFor="search">Search profile:</label>
          <br/>
          <input
            type="text"
            id="search"
            placeholder="  Enter Profile Name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
  
        <div className="profiles-container">
      
  
          {filteredProfiles.map((profile, index) => (
            <a href={profile.link} key={index} target="_blank" rel="noopener noreferrer">
              <div className="profile-card">
                <img src={profile.image} alt={profile.name} />
                <h3>{profile.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default ForumLink;
  
  
  
    
  