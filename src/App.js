import './App.css';
import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
    let [data, setData] = useState([])
    let [message, setMessage] = useState('Search for Music!')
    let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term='
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        // Fetch Data
        const fetchData = async () => {
            const response = await fetch(API_URL + term)
            const resData = await response.json()
            if (resData.results.length > 0) {
                // Set State and Context valuer
                return setData(resData.results)
            } else {
                return setMessage('Not Found.')
            }
        }
        fetchData()
    }
    
    return (
        <div className="App">
        {message}
        <BrowserRouter>

          <Routes>
    
            <Route path="/">
                <SearchBar handleSearch={handleSearch} />
                <Gallery data={data} />
            <Route />
    
            <Route path="/album/:id">
                <AlbumView />
            </Route>
            
            <Route path="/artist/:id">
                <ArtistView />
            <Route>
    
          </Routes>

        </BrowserRouter>
        
        </div>
    );
}

export default App;

