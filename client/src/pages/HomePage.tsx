
import {  FiMail, FiUser } from "react-icons/fi";

import LogoutButton from "../components/Logout";
import { useGetProfile } from "../hooks/useAuth";



const HomePage = ()=>{


  const {data:user,isLoading} = useGetProfile();
  

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090d] text-gray-400">
        Loading your profile...
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08090d] px-4 text-white">
      <section className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-400">
            YOUR DASHBOARD
          </span>

          <LogoutButton/>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-full border-2 border-white/15 object-cover shadow-xl"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
              <FiUser size={36} />
            </div>
          )}

          <h1 className="mt-5 text-3xl font-semibold">
            Welcome, {user.name}
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            You're successfully signed in.
          </p>
        </div>

        <div className="mt-9 space-y-3">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <FiUser className="text-gray-400" size={20} />
            <div>
              <p className="text-xs text-gray-500">Full name</p>
              <p className="mt-1 text-sm">{user.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <FiMail className="text-gray-400" size={20} />
            <div>
              <p className="text-xs text-gray-500">Email address</p>
              <p className="mt-1 break-all text-sm">{user.email}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


export default HomePage;