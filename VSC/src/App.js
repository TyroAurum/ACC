import './App.css';
import Carouse from './jsx/carouse';
import CollegeCard  from './jsx/item';
import Banner from './jsx/banner';



const colleges = [
  {
    "Name":"Velammal Engineering College",
    "Location":"Chennai",
    "Src":'https://cdn.pixabay.com/photo/2015/11/06/14/59/gramophone-1028633_960_720.jpg',

  },
  {
    "Name":"Velammal Institute of Technology",
    "Location":"Chennai",
    "Src":'https://cdn.pixabay.com/photo/2015/11/06/14/59/gramophone-1028633_960_720.jpg'
  },
  {
    "Name":"Velammal college of engineering and technology",
    "Location":"Madurai",
    "Src":'https://cdn.pixabay.com/photo/2015/11/06/14/59/gramophone-1028633_960_720.jpg'
  },
]

const messages = [
  {
    "Title":"Iot",
    "Content":"iefshringdlsnrine",
    "Src":"https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    "Title":"AI",
    "Content":"dknsln;nds;nvk;dfn",
    "Src":"https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    "Title":"",
    "Content":"",
    "Src":"",
  }
]

const App = () => {
  return(
    <>
    <Carouse />
    <div className='container'>
      {colleges.map((college) => <CollegeCard college={college}/>)}
    </div>
    <div className='banner-cont'>
      {messages.map((message) => (<Banner message={message} />))}
    </div>
    </>
  )
}


export default App;