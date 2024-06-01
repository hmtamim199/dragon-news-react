
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RigthSideBar = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <h3 className="text-2xl">please login</h3>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          github
        </button>
      </div>
      <div className="p-4 ">
        <h3 className="text-2xl">Find us on</h3>
        <a href="https://www.facebook.com/profile.php?id=100077172938740" className=" p-3 flex items-center text-lg border rounded-t-lg">
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a href="" className=" p-3 flex items-center text-lg border-x">
          <FaTwitter className="mr-3"></FaTwitter>
          Facebook
        </a>
        <a href="" className=" p-3 flex items-center text-lg border rounded-b-lg">
          <FaInstagram className="mr-3"></FaInstagram>
          Facebook
        </a>

      </div>
      <div className="p-4 bg-slate-200 rounded-lg">
        <h3 className="text-2xl">Q-zone</h3>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RigthSideBar;