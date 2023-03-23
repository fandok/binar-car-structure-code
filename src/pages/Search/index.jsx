import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";

import SearchResult from "./components/SearchResult";

const Search = () => {
  return (
    <div>
      <Navbar />
      <Main showButton={false} />
      <SearchBar canSearch />
      <SearchResult />
      <Footer />
    </div>
  );
};

export default Search;
