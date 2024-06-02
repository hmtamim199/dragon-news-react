import { useLoaderData } from "react-router-dom";
import BreakingNews from "../BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import NavBar from "../Shared/NavBar/NavBar";
import RigthSideBar from "../Shared/RightSideBar/RigthSideBar";
import NewsCart from "../NewsCart";


const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2 border">
          {
            news.map(aNews => <NewsCart
              key={aNews._id}
              news={aNews}
            ></NewsCart>)}
        </div>
        <div>
          <RigthSideBar></RigthSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;