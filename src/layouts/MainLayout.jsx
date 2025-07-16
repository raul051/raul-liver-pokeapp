import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

const MainLayout = ({ children, showSearchBar = false }) => {
  return (
    <>
      <Header />
      {showSearchBar && <SearchBar />}
      {children}
    </>
  );
};

export default MainLayout;
