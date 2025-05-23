import Navbar from "../../components/ui/Navbar/Navbar";


export default function Header() {

  return (
    <nav className="flex items-center bg-zinc-900">
      <h1 className="text-3xl font-bold p-2 text-orange-600"> Velocity </h1>
      <Navbar />
    </nav>
  )

}
