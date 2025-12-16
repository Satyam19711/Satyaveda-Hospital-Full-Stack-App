const DoctorSkeleton = () => {
  return (
    <div className="border border-orange-200 rounded-xl overflow-hidden animate-pulse">
      <div className="h-40 bg-[#FF9933]/30 flex items-center justify-center">
        <p className="text-white text-xl font-medium opacity-80">Loading...</p>
      </div>

      <div className="p-4 space-y-3">
        <div className="h-3 w-24 bg-gray-300 rounded"></div>
        <div className="h-4 w-32 bg-gray-400 rounded"></div>
        <div className="h-3 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default DoctorSkeleton;
