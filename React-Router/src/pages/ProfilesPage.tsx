import { NavLink,Outlet } from "react-router-dom";
export default function ProfilePages(){

  const Profiles = [1,2,3,4,5];
  return (
    <div>
    <div className="flex flex-col gap-5 text-3xl p-[70px]">
      {Profiles.map((profile)=>
      <NavLink key={profile} to={`/profiles/${profile}`}
     className={({ isActive }) => {
              return isActive ? 'text-green-700' : '';
            }}
      >Profile {profile}</NavLink>)}
    </div>
    <Outlet/>
    </div>
  )
}