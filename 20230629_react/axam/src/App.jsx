import './App.css'
import Flex from './components/Flex'
import Image from './components/Image'

const images = [
  {id: 1, url:'/a.jpg', title:'pink1'},
  {id: 2, url:'/b.jpg', title:'pink2'},
  {id: 3, url:'/c.jpg', title:'pink3'},
]

function App() { 
  return ( 
    <>
    <Flex> 
    {images.map(image => (
      <div key={image.id}>
        <Image url={image.url} title={image.title}/>
      <h2>{image.title}</h2>
      </div>
        ))}
      </Flex>
    </>   
  )
}

export default App
