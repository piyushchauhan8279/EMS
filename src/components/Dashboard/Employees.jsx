import Header from "../others/Header";
import TaskList from "../others/TaskList";
import TasksNum from "../others/TasksNum";
function Employees() {
  return (
    <>
    <div className="h-screen w-screen p-10 bg-[#1C1C1C]">
    <Header></Header>
    <TasksNum></TasksNum>
    <TaskList></TaskList>
    </div>
    </>
  )
}

export default Employees;