import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#0A2647] p-4 py-6 text-white">
      <h3 className="font-bold">Quizaction</h3>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href="/auth">Sign Up</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
