// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-container">
      <h1 className="heading">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
