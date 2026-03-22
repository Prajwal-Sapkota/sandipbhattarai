import Footer from "../components/Footer";
import Navbar from "../components/Navigation";
import usePageTitle from "../hooks/usePageTitle";
import FutureGoals from "./About/FutureGoals";
import Philosophy from "./About/Philosophy";
import Skills from "./About/Skills";
import Story from "./About/Story";

const About = () =>{
    usePageTitle('About-me')
    return(
        <div className="">
            <Navbar/>
            <Story/>
            <Skills/>
            <Philosophy/>
            <FutureGoals/>
            <Footer/>

        </div>
    )
}
export default About;