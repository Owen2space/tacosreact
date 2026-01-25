export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a2e]">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-[#2d5a8a]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#2d5a8a] border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-2">
          TACOS<span className="text-[#2d5a8a]">.</span>
        </h2>
        <p className="text-gray-400 text-sm uppercase tracking-wider">Loading...</p>
      </div>
    </div>
  );
}
