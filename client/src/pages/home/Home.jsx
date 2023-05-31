import { FreshlyPicked, Illustrations, Products } from "../../components";
import { HeroHome } from "../../layouts";



const Home = () => {
    return (
        <div className="md:px-16 px-4 flex flex-col gap-20">
            <HeroHome />
            <Illustrations />
            <Products />
            <FreshlyPicked />
        </div>
    );
};


export default Home;