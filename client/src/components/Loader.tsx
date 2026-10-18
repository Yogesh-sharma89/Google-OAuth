
interface LoaderProps {
  text?: string;
}

export default function Loader({
  text = "Loading your profile...",
}: LoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#08090d] text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl" />

          <div className="absolute inset-0 animate-spin rounded-2xl border-2 border-transparent border-t-blue-400 border-r-purple-400" />

          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl">
            <span className="h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-gray-200">
            {text}
          </p>

          <div className="mt-3 flex justify-center gap-1.5">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"
                style={{ animationDelay: `${dot * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
