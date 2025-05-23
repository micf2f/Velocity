import ProfileInfo from "../../components/features/profile/ProfileInfo/ProfileInfo";
import Widget from "../../components/features/profile/Widget/Widget";

import bgImg from '../../assets/images/bg.jpg'


export default function ProfilePage() {

  return (<>

    <div className="bg-[#f3e3c4]">
      <h2 className="flex text-3xl font-bold text-gray-900 justify-center p-2"> Your Info </h2>
    </div>

    <ProfileInfo />

    <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-800 bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }} >

      <Widget />

    </div>

  </>)

}
