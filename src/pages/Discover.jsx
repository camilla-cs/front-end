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
    const [recommendations, setRecommendations] = useState([]); 
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
        
        const response = await fetch (`http://localhost:8080/anime/genre?genre=${genre}&year=${year}`);
        if (!response.ok) {
            throw new Error("Failed to fetch filtered anime.");
        }

        const data = await response.json();
        console.log("Filtered anime data:" , data);
        setAnimeList(data.genres || []); 

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

    const fetchRecommendations = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8080/anime/recommendations?title=${encodeURIComponent(searchQuery)}`); 
            if (!response.ok) {
                throw new Error ("Failed to fetch anime recommendations"); 
            }

            const data = await response.json(); 
            console.log("Recommendations received:", data); 
            setRecommendations(data.data || []); 
        } catch (error) {
            setError (error.message); 

        } finally {
            setLoading(false); 
        }
    }; 

    return (
        <div>
            <img src={DashImg} alt="studio-ghibli-2" className="admin-img"/>
            <div className="discover-wrapper">
           <nav className="discover-nav">
                <a>PROFILE</a>
                <a>DISCOVER</a>
                <a>USERS</a>
                <a>NEWS</a>
                <a>LISTS</a>
                <a>LOGOUT</a>
            </nav>


            <div className="discover-form-container">

                <h3>🧿 𝒟𝒾𝓈𝒸ℴ𝓋ℯ𝓇 𝒜𝓃𝒾𝓂ℯ 🍥</h3>

                {/* search anime by title */}
                <form onSubmit={handleSearch}>
                    <input type="anime" placeholder="Type anime title... " value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
                    <Tooltip title="Search" arrow>
                        <IconButton type="submit">
                        
                        <Button> <button className="search-button" type="search"><SearchIcon/></button></Button>
                    
                        </IconButton>
                    </Tooltip>

                </form>

                <form onSubmit={handleFilter}>
                
                    <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Select genre</option>
                        <option value="1">Action</option>
                        <option value="2">Adventure</option>
                        <option value="5">Avant Garde</option>
                        <option value="46">Award Winning</option>
                        <option value="28">Boys Love</option>
                        <option value="4">Comedy</option>
                        <option value="8">Drama</option>
                        <option value="10">Fantasy</option>
                        <option value="26">Girls Love</option>
                        <option value="47">Gourmet</option>
                        <option value="14">Horror</option>
                        <option value="7">Mystery</option>
                        <option value="22">Romance</option>
                        <option value="24">Sci-Fi</option>
                        <option value="36">Slice of Life</option>
                        <option value="30">Sports</option>
                        <option value="37">Supernatural</option>
                        <option value="41">Suspence</option>
                        <option value="9">Ecchi</option>
                        <option value="49">Erotica</option>
                        <option value="12">Hentai</option>
                        <option value="50">Adult Cast</option>
                        <option value="51">Antropomorphic</option>
                        <option value="52">CGDCT</option>
                        <option value="53">Childcare</option>
                        <option value="54">Combat Sports</option>
                        <option value="81">Crossdressing</option>
                        <option value="55">Delinquents</option>
                        <option value="39">Detective</option>
                        <option value="56">Educational</option>
                        <option value="57">Gag Humor</option>
                        <option value="58">Gore</option>
                        <option value="35">Harem</option>
                        <option value="59">High Stackes Game</option>
                        <option value="13">Historical</option>
                        <option value="60">Idols (Female)</option>
                        <option value="61">Idols (Male)</option>
                        <option value="62">Isekai</option>
                        <option value="63">Iyashikei</option>
                        <option value="64">Love Polygon</option>
                        <option value="65">Magical Sex Shift</option>
                        <option value="66">Mahou Shoujo</option>
                        <option value="17">Martial Arts</option>
                        <option value="18">Mecha</option>
                        <option value="67">Medical</option>
                        <option value="38">Military</option>
                        <option value="19">Music</option>
                        <option value="6">Mythology</option>
                        <option value="68">Organized Crime</option>
                        <option value="69">Otaku Culture</option>
                        <option value="20">Parody</option>
                        <option value="70">Performing Arts</option>
                        <option value="71">Pets</option>
                        <option value="40">Psychological</option>
                        <option value="3">Racing</option>
                        <option value="72">Reincarnation</option>
                        <option value="73">Reverse Harem</option>
                        <option value="74">Love Status Quo</option>
                        <option value="21">Samurai</option>
                        <option value="23">School</option>
                        <option value="75">Showbiz</option>
                        <option value="29">Space</option>
                        <option value="11">Strategy Game</option>
                        <option value="31">Super Power</option>
                        <option value="76">Survival</option>
                        <option value="77">Team Sports</option>
                        <option value="78">Time Travel</option>
                        <option value="32">Vampire</option>
                        <option value="79">Video Game</option>
                        <option value="80">Visual Arts</option>
                        <option value="48">Workplace</option>
                        <option value="82">Urban Fantasy</option>
                        <option value="83">Villainess</option>
                        <option value="43">Josei</option>
                        <option value="15">Kids</option>
                        <option value="42">Seinen</option>
                        <option value="25">Shoujo</option>
                        <option value="27">Shounen</option>
                    </select>
                      
                        <input
                            id="year"
                            type="number"
                            placeholder="Release Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    <button type="filter" onClick={handleFilter}>Filter</button>
                </form>
               
                <button onClick={fetchRandomAnime}> Get Random Anime 🔀 </button>
               
               
                <form onSubmit={fetchRecommendations}>
                    <input type="text" placeholder="Type anime title for recommendations ..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type="recommendations">Get recommendations ✨</button>
                </form>
               
            

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
                            <h5>{anime.title_japanese}</h5>
                            <p>{anime.type}</p>
                            <p>{anime.start_date}</p>
                            <p>{anime.synopsis}</p>
                        </div>
                        );
                    })
                    ) : (
                    !loading && <p>No results found.</p>
                    )}
                </div>

                <div className="anime-results">
                        {recommendations.length > 0 &&
                            recommendations.map((rec, index) => (
                                <div key={`${rec.entry.mal_id}-${index}`} className="anime-card">
                                    <img src={rec.entry.images.jpg.image_url} alt={rec.entry.title} />
                                    <h4>{rec.entry.title}</h4>
                                </div>
                            ))}
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