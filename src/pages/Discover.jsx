import React, {useState} from "react";
import '../styles/discover.css';
import DashImg from '../assets/dashboard.jpg' ; 
import Footer from "../components/Footer";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { RedirectUserDashboard } from "../components/RedirectUserDashboard";
import { RedirectAdminDashboard } from "../components/RedirectAdminDashboard";


function AnimeSearch () {
    const [searchQuery, setSearchQuery] = useState("");
    const [genre, setGenre] = useState(""); 
    const[year, setYear]= useState("");  
    const [animeList, setAnimeList] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(false); 

    // search anime by title
    const handleSearch = async (e) => {
        e.preventDefault(); 
        setLoading (true); 
        setError(null); 

        try {
            const response = await fetch (`http://localhost:8080/anime/browse?title=${searchQuery}`);
            if (!response.ok) {
                throw new Error ("Failed to fetch anime"); 
            }

            const data = await response.json(); 
            console.log("Anime received from backend:", data);
            setAnimeList (data.data || []); 
        } catch (error) {
            setError (error.message);
        } finally {
            setLoading(false); 
        }
    };

     // filter anime search 
     const handleFilter = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch (`http://localhost:8080/anime/browse?genres=${genre}&year=${year}`);
            if (!response.ok) {
                throw new Error("Failed to fetch filtered anime.");
            }

            const data = await response.json();
            console.log("Filtered anime data:" , data);
            setAnimeList(data.data || []); 

        } catch (error) {
            setError(error.message); 
        } finally {
            setLoading(false); 
        }
     }; 

     // Random anime search 
     const fetchRandomAnime = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/anime/random`);
            if (!response.ok) {
                throw new Error("Failed to fetch random anime.");
            }

            const data = await response.json(); 
            console.log("Random anime: " , data); 
            setAnimeList([data.result.data]); 

        } catch (error) {
            setError(error.message); 
        } finally {
            setLoading(false); 
        }
     };

    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-2" className="admin-img"/>
            <div className="wrapper">
           <nav>
                <a>PROFILE</a>
                <a>DISCOVER</a>
                <a>USERS</a>
                <a>NEWS</a>
                <a>LISTS</a>
                <a>LOGOUT</a>
            </nav>


            <div className="form-container">

                <h3>🧿 𝒟𝒾𝓈𝒸ℴ𝓋ℯ𝓇 𝒜𝓃𝒾𝓂ℯ 🍥</h3>

            {/* search anime by title */}
            <form onSubmit={handleSearch}>
                <input type="anime" placeholder="Type anime title... " value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
                <Tooltip title="Search" arrow>
                    <IconButton type="submit">
                     
                    <Button> <button type="search"><SearchIcon/></button></Button>
                
                    </IconButton>
                </Tooltip>

            </form>

            <form onSubmit={handleFilter}>
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">Select genre</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Avant Garde">Avant Garde</option>
                    <option value="Award Winning">Award Winning</option>
                    <option value="Boys Love">Boys Love</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Girls Love">Girls Love</option>
                    <option value="Gourmet">Gourmet</option>
                    <option value="Horror">Horror</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Slice of Life">Slice of Life</option>
                    <option value="Sports">Sports</option>
                    <option value="Supernatural">Supernatural</option>
                    <option value="Suspence">Suspence</option>
                    <option value="Ecchi">Ecchi</option>
                    <option value="Erotica">Erotica</option>
                    <option value="Hentai">Hentai</option>
                    <option value="Adult Cast">Adult Cast</option>
                    <option value="Antropomorphic">Antropomorphic</option>
                    <option value="CGDCT">CGDCT</option>
                    <option value="Childcare">Childcare</option>
                    <option value="Combat Sports">Combat Sports</option>
                    <option value="Crossdressing">Crossdressing</option>
                    <option value="Delinquents">Delinquents</option>
                    <option value="Detective">Detective</option>
                    <option value="Educational">Educational</option>
                    <option value="Gag Humor">Gag Humor</option>
                    <option value="Gore">Gore</option>
                    <option value="Harem">Harem</option>
                    <option value="High Stackes Game">High Stackes Game</option>
                    <option value="Historical">Historical</option>
                    <option value="Idols (Female)">Idols (Female)</option>
                    <option value="Idols (Male)">Idols (Male)</option>
                    <option value="Isekai">Isekai</option>
                    <option value="Iyashikei">Iyashikei</option>
                    <option value="Love Polygon">Love Polygon</option>
                    <option value="Magical Sex Shift">Magical Sex Shift</option>
                    <option value="Mahou Shoujo">Mahou Shoujo</option>
                    <option value="Martial Arts">Martial Arts</option>
                    <option value="Mecha">Mecha</option>
                    <option value="Medical">Medical</option>
                    <option value="Military">Military</option>
                    <option value="Music">Music</option>
                    <option value="Mythology">Mythology</option>
                    <option value="Organized Crime">Organized Crime</option>
                    <option value="Otaku Culture">Otaku Culture</option>
                    <option value="Parody">Parody</option>
                    <option value="Performing Arts">Performing Arts</option>
                    <option value="Pets">Pets</option>
                    <option value="Psychological">Psychological</option>
                    <option value="Racing">Racing</option>
                    <option value="Reincarnation">Reincarnation</option>
                    <option value="Reverse Harem">Reverse Harem</option>
                    <option value="Love Status Quo">Love Status Quo</option>
                    <option value="Samurai">Samurai</option>
                    <option value="School">School</option>
                    <option value="Showbiz">Showbiz</option>
                    <option value="Space">Space</option>
                    <option value="Strategy Game">Strategy Game</option>
                    <option value="Super Power">Super Power</option>
                    <option value="Survival">Survival</option>
                    <option value="Team Sports">Team Sports</option>
                    <option value="Time Travel">Time Travel</option>
                    <option value="Vampire">Vampire</option>
                    <option value="Video Game">Video Game</option>
                    <option value="Visual Arts">Visual Arts</option>
                    <option value="Workplace">Workplace</option>
                    <option value="Urban Fantasy">Urban Fantasy</option>
                    <option value="Villainess">Villainess</option>
                    <option value="Josei">Josei</option>
                    <option value="Kids">Kids</option>
                    <option value="Seinen">Seinen</option>
                    <option value="Shoujo">Shoujo</option>
                    <option value="Shounen">Shounen</option>
                </select>

                <input type="number" placeholder="Release Year" value={year} onChange={(e) => setYear(e.target.value)}/>
                <button type="filter">Filter</button>
            </form>
               
                <button onClick={fetchRandomAnime}> Get Random Anime 🔀 </button>
                <button type="recommendations">Get recommendations ✨</button>
            

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="anime-results">
                {animeList.length > 0 ? (
                animeList.map((anime, index) => {
                    if (!anime?.mal_id || !anime?.images?.jpg?.image_url || !anime?.title) {
                        return null; // Skip invalid entries without logging every time
                    }

                    return (
                    // every key is unique even if duplicate values in jikan api exist so two different anime with the same key value won't appear in the search result. 
                    <div key={`${anime.mal_id}-${index}`} className="anime-card">
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h4>{anime.title}</h4>
                        <p>{anime.synopsis}</p>
                    </div>
                    );
                })
                ) : (
                !loading && <p>No results found.</p>
                )}
            </div>


            <RedirectUserDashboard/>
            <RedirectAdminDashboard/>
            </div>
            </div>


            <Footer/>
        </div>
    ); 
}

export default AnimeSearch; 