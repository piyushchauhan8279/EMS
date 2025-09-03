import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

function Admin() {
  return (
    <div className="p-4 sm:p-7 min-h-screen w-full">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
}


export default Admin;
