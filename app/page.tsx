import Image from "next/image";
import LeftBar from "./Components/LeftBar/LeftBar";
import Feed from "./Components/Feed/Feed";
import RightBar from "./Components/RightBar/RightBar";
export default function Home() {
  return (
    <div className="mainPageContainer">
      <div className="mainPage">
        <LeftBar/>
        <Feed/>
        <RightBar/>
      </div>
    </div>
  );
}
