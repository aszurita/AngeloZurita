import {profile} from "../../../data/Profile"

function Profile() {
  return (
    <div className="flex flex-col place-content-center place-items-center">
      <div >
        <img src="assets/profile/profile.jpg" alt="profile" className="w-40 h-40"/>
      </div>
      <div className="flex flex-col place-content-center place-items-center text-center">   
        <h1 className="font-bold font-roboto-slab text-2xl py-3">Angelo Saul Zurita Guerrero</h1>
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gray-400 font-montserrat">{profile.areas}</p>
          <p className="text-gray-400 font-montserrat">{profile.gmail}</p>
        </div>
      </div>
      <div className="relative flex place-content-center place-items-center  text-center italic text-sm w-full">
      <div className="absolute max-sm:left-20 left-14 top-[-5px] font-comillas pr-3 text-5xl">“</div>
        <div className="w-3/4 flex place-content-center place-items-center text-center">
          <text className="text-gray-400 text-center py-5 font-montserrat">{profile.phrase}</text>
        </div>
      <div className="absolute max-sm:right-20 right-14 bottom-[-5px] font-comillas pr-3 text-5xl">”</div>
      </div>
    </div>
  )
}
export default Profile;