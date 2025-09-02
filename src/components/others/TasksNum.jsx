function Tasks() {
  return (
    <>
      <div className="flex mt-12 justify-between gap-5">
        <div className="bg-blue-400 w-[40%] rounded-xl py-6 px-9 ">
          <h2 className="text-3xl font-medium">0</h2>
          <h3 className="text-xl font-semibold">New Task</h3>
        </div>
        <div className="bg-green-400 w-[40%] rounded-xl py-6 px-9 ">
          <h2 className="text-3xl font-medium">0</h2>
          <h3 className="text-xl font-semibold">Completed</h3>
        </div>
        <div className="bg-yellow-400 w-[40%] rounded-xl py-6 px-9 ">
          <h2 className="text-3xl font-medium">0</h2>
          <h3 className="text-xl font-semibold">Accepted</h3>
        </div>
        <div className="bg-red-400 w-[40%] rounded-xl py-6 px-9 ">
          <h2 className="text-3xl font-medium">0</h2>
          <h3 className="text-xl font-semibold">Failed</h3>
        </div>
      </div>
    </>
  );
}

export default Tasks;
