import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkedAsRead = time =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-5'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} 
      handleMarkedAsRead = {handleMarkedAsRead}
      ></Blogs>
      <Bookmarks
      readingTime = {readingTime}
      bookmarks={bookmarks} ></Bookmarks>
      </div>
    </>
  )
}


export default App
