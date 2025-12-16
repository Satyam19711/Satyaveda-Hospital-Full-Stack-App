const GlobalLoader = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] w-full">
      <div className="relative">
        <div className="w-14 h-14 rounded-full border-4 border-orange-200"></div>

        <div className="w-14 h-14 rounded-full border-4 border-[#FF9933] border-t-transparent absolute top-0 left-0 animate-spin"></div>
      </div>
    </div>
  );
};

export default GlobalLoader;
