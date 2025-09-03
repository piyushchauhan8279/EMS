function CreateTask(){
  return (
    <>
    <div className="mt-7 p-5 bg-[#1C1C1C] rounded-sm">
          <form className="flex flex-wrap items-start justify-between w-full">
            <div className="w-1/2">
              <div className="mb-3">
                <h3 className="mb-2 text-sm text-gray-300">Task Title</h3>
                <input
                  type="text"
                  placeholder="Make a UI Design"
                  className="w-4/5 bg-transparent text-sm py-1 px-2 rounded outline-none border-2 border-emerald-500"
                />
              </div>
              <div className="mb-3">
                <h3 className="mb-2 text-sm text-gray-300">Date</h3>
                <input
                  type="date"
                  className="w-4/5 bg-transparent text-sm py-1 px-2 rounded outline-none border-2 border-emerald-500"
                />
              </div>
              <div className="mb-3">
                <h3 className="mb-2 text-sm text-gray-300">Assign Task</h3>
                <input
                  className="w-4/5 bg-transparent text-sm py-1 px-2 rounded outline-none border-2 border-emerald-500"
                  type="text"
                  placeholder="Employee Name"
                />
              </div>
              <div className="mb-3">
                <h3 className="mb-2 text-sm text-gray-300">Category</h3>
                <input
                  className="w-4/5 bg-transparent text-sm py-1 px-2 rounded outline-none border-2 border-emerald-500"
                  type="text"
                  placeholder="design,dev,etc"
                />
              </div>
            </div>

            <div className="w-1/2">
              <div>
                <h3 className="mb-2 text-sm text-gray-300">Description</h3>
                <textarea className="w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-2 border-emerald-600 rounded-sm"></textarea>
                <button className="bg-emerald-400 hover:bg-emerald-600 py-3 px-5 rounded-md text-sm font-medium w-full mt-2.5">
                  Create Task
                </button>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default CreateTask;