function Header(){
  return (
    <>
      <div className="flex items-end justify-between ">
        <h1 className="text-2xl font-medium">Hello <br/><span className="text-3xl font-semibold">Piyush 👋</span></h1>
        <button className="bg-red-600 rounded-lg py-2 px-4">Log Out</button>
      </div>
    </>
  )
}

export default Header;