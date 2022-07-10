import Nav from '../components/nav'
import Activity from '../components/activity'
import { useState, useEffect } from 'react'
import Header from '../components/header'
import useSpotify from '../hooks/useSpotify'
import UploadModal from '../components/UploadModal'
import Playlist from '../components/Playlist'
// import { songs } from '../data/songs'
import PlayerControls from '../components/PlayerControls'

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  const [songs, setSongs] = useState([])
  console.log(songs, 'songs are here')

  const { newMusic, getSongs } = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
  )

  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs)
    })
  }, [])
   
  return (
    <div className='flex'>
      <Nav />

      <div className='w-full '>
        <Header setShowUploadMusic={setShowUploadMusic}
          />
          <Playlist songs={songs} />
           <PlayerControls songs={songs}/>
        {showUploadMusic && (
          <UploadModal
            title={title}
            setTitle={setTitle}
            setShowUploadMusic={setShowUploadMusic}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
          />
        )}
        </div>
      <Activity />
    </div>
  )
}

export default HomePage
