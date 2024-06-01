import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import NavBar from "../Shared/NavBar/NavBar";
import RigthSideBar from "../Shared/RightSideBar/RigthSideBar";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-4xl">content cooming soon</h2>
        </div>
        <div className="border">
          <RigthSideBar></RigthSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;