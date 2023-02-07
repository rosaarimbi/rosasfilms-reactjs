import './App.css'
import NavigationBar from './components/NavigationBar'
import "./style/landingPage.css"
import Intro from './components/Intro'
import Trending from './components/Trending'
import Action from './components/Action'

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className="trending">
        <Trending/>
      </div>
      {/* end of trending section */}

      
      {/* superhero section */}
      <div className="action">
        <Action/>
      </div>
      {/* end of superhero section */}
    </div>
  )
}

export default App;

