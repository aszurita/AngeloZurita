import Profile from "./Profile";
function MeExperienceSection(){
  return (
    <div className="flex w-full flex-wrap place-content-center place-items-center">
      <div className="w-1/3 min-w-[325px]">
        <Profile/>
      </div>
      <div className="bg-red-500 w-2/3">
      </div>
    </div>
  )
}
export default MeExperienceSection;