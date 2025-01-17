export default function LogoSection(toggleMenu) {
  const clickHandle = () => toggleMenu()
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-20"></div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1d/O_Botic%C3%A1rio_Logo.png"
        alt="Logo O Boticário"
        className="max-h-20 sm:max-h-28 md:max-h-36 lg:max-h-48 items-center flex-1 object-contain"
      />
      <div className="w-20 flex justify-end ">
        <button className="lg:hidden p-2 text-white bg-gray-700 rounded " onClick={clickHandle}>
          ☰
        </button>
      </div>
    </div>
  )
}
