// GalleryItem.js
import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div className="Results">
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div>

                <h2>"{props.data.trackName}"</h2>

                <h3>
                    <Link to="artist">Artist</Link> |{"/artist/:id"}
                </h3>

                <h3>
                    <Link to="album"></Link> |{"/album/:id"}
                </h3>

            </div>
        )
    }
}
export default GalleryItem