function AllTask() {
  return (
    <div
      id="all-tasks"
      className="bg-[#1C1C1C] p-4 sm:p-5 mt-5 rounded max-h-60 sm:max-h-80 overflow-auto"
    >
      <div className="bg-red-400 py-2 px-3 sm:px-4 rounded flex flex-col sm:flex-row justify-between mb-2 gap-2 sm:gap-0">
        <h2 className="text-sm sm:text-base">Piyush</h2>
        <h3 className="text-sm sm:text-base">Make a UI Design</h3>
        <h5 className="text-sm sm:text-base">Status</h5>
      </div>

      {/* Repeat for other task cards */}
    </div>
  );
}


export default AllTask;
