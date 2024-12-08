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
    const [animeList, setAnimeList] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(false); 

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
            <form onSubmit={handleSearch}>
                <input type="anime" placeholder="Type anime title... " value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
                <Tooltip title="Search" arrow>
                    <IconButton type="submit">
                     
                    <Button> <button type="search"><SearchIcon/></button></Button>
                
                    </IconButton>
                </Tooltip>
                
                <button type="filter">Filter</button>
                <button type="recommendations">Get recommendations ✨</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="anime-results">
                {animeList.length > 0 ? (
                animeList.map((anime, index) => (
                    // every key is unique even if duplicate values in jikan api exist so two different anime with the same key value won't appear in the search result. 
                    <div key={`${anime.mal_id}-${index}`} className="anime-card">
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h4>{anime.title}</h4>
                        <p>{anime.synopsis}</p>
                    </div>
                ))
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