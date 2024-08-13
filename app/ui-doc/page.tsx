import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

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
