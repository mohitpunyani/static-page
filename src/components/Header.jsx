export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold text-blue-600">
        ReactBrand
      </h1>

    {/* anchor behave like span tag*/}
      <nav className="space-x-6 hidden md:block"> 
        <a className="text-gray-600 hover:text-blue-950">Home</a>
        <a className="text-gray-600 hover:text-blue-900">Features</a>
        <a className="text-gray-600 hover:text-blue-900">Contact</a>
      </nav>
    </header>
  );
}
