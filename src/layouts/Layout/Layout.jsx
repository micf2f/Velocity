import { Outlet } from "react-router-dom";

import Header from '../../pages/Header/Header';
import Footer from "../../pages/Footer/Footer";


export default function Layout() {

  return (
    <div className="text-white bg-zinc-800">
      <header> <Header /> </header>
      <main> <Outlet /> </main>
      <footer> <Footer /> </footer>
    </div>
  )

}
