import React from 'react'
import '../pages/Home.css'
import Logo from './images/RapCaviar.jpg'
const Home = () => {
  return (
    <div>
        <div className="sidebar">
        <div className="logo">
            <a href="">
                <img src={require('./images/Spotify Logo.png')} alt="Logo"/>
            </a>
        </div>

        <div className="navigation">
            <ul>
                <li>
                    <a href="">
                        <span className="fa fa-home"></span>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa fa-search"></span>
                        <span>Search</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa fas fa-book"></span>
                        <span>Your Library</span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="navigation">
            <ul>
                <li>
                    <a href="">
                        <span className="fa fa-home"></span>
                        <span>Create Playlist</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa fa-search"></span>
                        <span>Liked Songs</span>
                    </a>
                </li>

            </ul>
        </div>

        <div className="policies">
            <ul>
                <li>
                    <a href="">Cookies</a>
                </li>
                <li>
                    <a href="">Privacy</a>
                </li>
            </ul>
        </div>


    </div>

    <div className="main-container">
        <div className="topbar">
            <div className="prev-next-buttons">
                <button type="button" className="fa fas fa-chevron-left"></button>
                <button type="button" className="fa fas fa-chevron-right"></button>
            </div>

            <div className="navbar">
                <ul>
                    <li>
                        <a href="">Sign Up</a>
                    </li>
                </ul>
                <button type="button">Login</button>
            </div>
        </div>

        <div className="spotify-playlists">
            <h2>Spotify Playlists</h2>

            <div className="list">
                <div className="item">
                    <img src={require('./images/Today_s Top Hits.jpg')} />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Today's Top Hits</h4>
                    <p>Olivia Rodrigo is on top of the Hottest 50!</p>
                </div>

                <div className="item">
                    <img src={Logo}/>
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>RapCaviar</h4>
                    <p>New Music from Cardi B, Megan Thee Stallion an...</p>
                </div>

                <div className="item">
                    <img src={require('./images/All Out 2010s.jpg')} />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>All out 2010s</h4>
                    <p>The biggest spmgs pf tje 2010s.</p>
                </div>

                <div className="item">
                    <img src={require("./images/Rock Classics.jpg")} />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Rock classNameics</h4>
                    <p>Rock Legends & epic songs that continue to...</p>
                </div>

                <div className="item">
                    <img src="./images/Chill Hits.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Chill Hits</h4>
                    <p>Kick back to the best new and recent chill hits</p>
                </div>

                <div className="item">
                    <img src="./images/Viva Latino.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Viva Latino</h4>
                    <p>Today's top Latin hits elevando nuestra...</p>
                </div>



                <div className="item">
                    <img src="./images/All Out 80s.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>All out 80s</h4>
                    <p>The biggest songs of the 1980s. Cover: Michael...</p>
                </div>
            </div>
        </div>

        <div className="spotify-playlists">
            <h2>Focus</h2>
            <div className="list">
                <div className="item">
                    <img src="./images/Peaceful Piano.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Peaceful Piano</h4>
                    <p>Peaceful piano to help you slow down, breath...</p>
                </div>

                <div className="item">
                    <img src="./images/Deep Focus.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Deep Focus</h4>
                    <p>Keep calm and focus with ambient and post-...</p>
                </div>

                <div className="item">
                    <img src="./images/Instrumental Study.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Instrumental Study</h4>
                    <p>Focus with soft study music in the background.</p>
                </div>



                <div className="item">
                    <img src="./images/Focus Flow.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Focus Flow</h4>
                    <p>Uptempo instrumental hip hop beats</p>
                </div>

                <div className="item">
                    <img src="./images/Beats to think to.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Beats to think to</h4>
                    <p>Focus with melodic techno and tech house.</p>
                </div>

                <div className="item">
                    <img src="./images/Reading Adventure.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Reading Adventure</h4>
                    <p>Scores and soundtracks for daring quests, epic...</p>
                </div>

                <div className="item">
                    <img src="./images/Workday Lounge.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>Workday Lounge</h4>
                    <p>Lounge and chill out music for your workday</p>
                </div>
            </div>
        </div>

        <div className="spotify-playlists">
            <h2>Sound of India</h2>
            <div className="list">
                <div className="item">
                    <img src="./images/The Sound of Mumbai.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>The Sound of Mum...</h4>
                    <p>The songs that define, unite and distinguish...</p>
                </div>

                <div className="item">
                    <img src="./images/The Sound of Kolkata.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>The Sound of Kolka...</h4>
                    <p>The songs that define, unite and distinguish...</p>
                </div>

                <div className="item">
                    <img src="./images/The Sound of Delhi.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>The Sound of Delhi...</h4>
                    <p>The songs that define, unite and distinguish...</p>
                </div>

                <div className="item">
                    <img src="./images/The Sound of Bengaluru.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>The Sound of Ben...</h4>
                    <p>The songs that define, unite and distinguish...</p>
                </div>

                <div className="item">
                    <img src="../images/The Sound of Chennai.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>The Sound of Chen...</h4>
                    <p>The songs that define, unite and distinguish...</p>
                </div>

                <div className="item">
                    <img src="./images/The Sound of Hyderabad.jpg" />
                    <div className="play">
                        <span className="fa fa-play"></span>
                    </div>
                    <h4>The Sound of Hyde...</h4>
                    <p>The songs that define, unite and distinguish...</p>
                </div>


            </div>

            
        </div>

    </div>

    <div className="preview">
        <div className="text">
            <h6>Preview of Spotify</h6>
            <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <div className="button">
            <button type="button">Sign up free</button>
        </div>
    </div>

    </div>
  )
}

export default Home