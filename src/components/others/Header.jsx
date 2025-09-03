function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
      <h1 className="text-xl sm:text-2xl font-medium">
        Hello <br />
        <span className="text-2xl sm:text-3xl font-semibold">Piyush 👋</span>
      </h1>
      <button className="bg-red-600 rounded-lg py-2 px-4 text-white text-sm sm:text-base">
        Log Out
      </button>
    </div>
  );
}


export default Header;