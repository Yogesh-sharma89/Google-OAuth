
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {

const handleGoogleLogin = () => {
  window.location.href = "http://localhost:3000/api/auth/google";
};


  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090d] px-4 text-white">
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-10">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl">
          ✦
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Sign in to continue to your account.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 cursor-pointer flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white px-5 py-3.5 font-medium text-gray-900 transition hover:bg-gray-200 active:scale-[0.98]"
        >
          <FcGoogle className="size-6" />
          Continue with Google
        </button>

        <p className="mt-6 text-xs text-gray-500">
          Secure authentication powered by Google OAuth.
        </p>
      </div>
    </main>
  );
};

export default AuthPage;
