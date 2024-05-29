import About from "../About/About";
import Banner from "../Banner/Banner";
import MoreService from "../Services/MoreService";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MoreService></MoreService>

        </div>
    );
};

export default Home;