import Header from "./header";
import RoutesPage from "../routes";
import Footer from "./footer";
function Layout() {
  return (
    <>
      <Header />
      <main>
        <RoutesPage />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
