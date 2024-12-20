import React, { useEffect, useState } from "react";
import DashImg from '../assets/dashboard.jpg';
import { Link } from "react-router-dom";
import '../styles/animelist.css'; 
import Footer from "../components/Footer";


function AnimeList () {
const [search, setSearch] = useState(""); 
const [myAnimeList, setMyAnimeList] = useState(() => {
  const savedList = localStorage.getItem("myAnimeList");
  return savedList ? JSON.parse(savedList) : [];
}); 
const [animeData, setAnimeData] = useState([]); 
const [cache, setCache] = useState(() => {
  const savedCache = localStorage.getItem("animeSearchCache");
  return savedCache ? JSON.parse(savedCache) : {};
});
const token = localStorage.getItem("token");




// Fetch user's saved anime list from the backend
const fetchMyAnimeList = async () => {


  if(!token) {
    console.error ("No token found in localstorage."); 
    return alert ("Please log in to getch anime list. ");
  }
    try { 
      const response = await fetch(`${import.meta.env.VITE_API_URL_SERVER}/lists/user`, {
        method:"GET",
        headers: {
           
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch your list.");
      const data = await response.json();
      setMyAnimeList(data.lists?.[0]?.animeTitles || []);
    } catch (error) {
      console.error("Error fetching saved list:", error.message);
    }
  };

  // Save the anime list to the backend
const saveListToBackend = async () => {
    if (!token) {
      alert("Please log in to save your anime list.");
      return;
  }


    const listPayload = {
      name: "My Anime List",
      animeTitles: myAnimeList.map((anime) => ({
        mal_id:anime.mal_id,
        title:anime.title,
        title_japanese: anime.title_japanese, 
        type:anime.type,
        aired:anime.aired?.string,
        image_url:anime.images.jpg.image_url,
      })),
      isPublic: false, 
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL_SERVER}/lists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(listPayload),
      });

      if (!response.ok) throw new Error("Failed to save list.");
      console.log("List saved successfully!");
    } catch (error) {
      console.error("Error saving list to backend:", error.message);
    }
  };

// get anime data from Jikan API 
const getData = async () => {
  if (cache[search]) {
    setAnimeData(cache[search]); 
    return;
  }

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}` );
    if (response.ok) {
      const responseData = await response.json();
      setAnimeData(responseData.data);
      setCache((prevCache) => {
        const updatedCache = { ...prevCache, [search]: responseData.data };
        localStorage.setItem("animeSearchCache", JSON.stringify(updatedCache));
        return updatedCache;
      });
      
    } else {
      console.error("Error fetching data:", response.status);
    }
  } catch (error) {
    console.error("Error fetching anime data:", error.message);
  }
};


//fetch user list every time the token changes
useEffect(() => {
  if (token) fetchMyAnimeList();
}, [token]);

//Persist list to localStorage
useEffect(() => {
  localStorage.setItem("myAnimeList", JSON.stringify(myAnimeList)); 
}, [myAnimeList]); 

//fetch anime data when searching
useEffect(() =>{
    if (search) getData();
}, [search]); 

//add anime to list
const addToList = (anime) => {
    if(!myAnimeList.some((item)=> item.mal_id===anime.mal_id)) {
        setMyAnimeList ([...myAnimeList, anime]); 

    }
}; 

//remove anime from list
const removeFromList = (anime) => {
    setMyAnimeList (myAnimeList.filter((item) => item.mal_id !== anime.mal_id)); 
}; 

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  
const handleSearch = debounce((value) => {
    setSearch(value); // Update the search state
  }, 500); // 500ms delay

return (
    <div>
            <img src={DashImg} alt="studio-ghibli-2" className="admin-img"/>
        <div className="list-wrapper">
            <nav className="list-nav">
            <Link to="/profile">
                <a>PROFILE</a>
            </Link>

            <Link to="/discover">
                <a>DISCOVER</a>
            </Link>

            < Link to ="/news">
            <a>NEWS</a>
            </Link>
            <a>LISTS</a>
            <Link to="/">
                <a>LOGOUT</a>
            </Link>

            </nav>

            <div className="list-form-container">

                <h3>✧˖°🌷📎⋆ 𝒜𝓃𝒾𝓂ℯ ℒ𝒾𝓈𝓉𝓈 ˚｡⋆୨୧˚</h3>
                
                <div className="search-box">
                    <input className="input-button" type="search" placeholder="Search your anime" onChange={(e)=> handleSearch(e.target.value)}/>

                </div>

                <div className="anime-results">
                <h2> ⋆｡‧˚𝚂𝚎𝚊𝚛𝚌𝚑 𝚁𝚎𝚜𝚞𝚕𝚝𝚜 </h2>
                {animeData.length > 0 ? (
                animeData.map((anime) => (
                    <div key={anime.mal_id} className="anime-card">
                    <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        onClick={() => addToList(anime)} // Add to list on click
                    />
                    <h4>{anime.title}</h4>
                    <h5>{anime.title_japanese}</h5>
                    <p>{anime.type}</p>
                    <p>{anime.aired?.string}</p>
                    </div>
                ))
                ) : (
                <p>No results found.</p>
                )}
                </div>
                <div className="anime-results">
            <h2> ☾ 𝙼𝚢 𝙰𝚗𝚒𝚖𝚎 𝙻𝚒𝚜𝚝 ☁️</h2>
            <button onClick={saveListToBackend} className="save-button">Save List </button>
            {myAnimeList.length > 0 ? (
              myAnimeList.map((anime) => (
                <div key={anime.mal_id} className="anime-card">
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    onClick={() => removeFromList(anime)} // Remove from list after clicked
                  />
                  <h4>{anime.title}</h4>
                  <h5>{anime.title_japanese}</h5>
                  <p>{anime.type}</p>
                  <p>{anime.aired?.string}</p>
                </div>
              ))
            ) : (
              <p>No items in your list.</p>
            )}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    
);
}

export default AnimeList;


