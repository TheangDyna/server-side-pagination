import Footer from "../components/temeplates/Footer";
import Navbar from "../components/temeplates/Navbar";
import Pagination from "../components/molecules/Pagination";

const UIDoc: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <p>Navbar:</p>
      <Navbar />
      <p>Footer:</p>
      <Footer />
      <p>Pagination:</p>
      <Pagination total={30} limit={6} />
    </div>
  );
};

export default UIDoc;
