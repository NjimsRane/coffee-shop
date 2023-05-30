import { FreshlyPicked, Illustrations, Products } from "../../components";



const Home = () => {
    return (
        <div className="md:px-16 px-4 flex flex-col gap-8">
            <Illustrations />
            <Products />
            <FreshlyPicked />
        </div>
    );
};


export default Home;