import Expertise from "../components/Expertise"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Journey from "../components/Journey"
import Navbar from "../components/Navigation"
import RecentBlogs from "../components/RecentBlogs"

const Home = () => {
    return (
        <div className="overflow-x-hidden">
           <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Journey />
        <RecentBlogs/>
        <Gallery/>

       
      </main>
      <Footer /> 
        </div>
    )
}
export default Home;