import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductSlice";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Product from "../components/Home/Product";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setItemOffset(0);
  }, [searchTerm, products]);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = filteredProducts.slice(itemOffset, endOffset);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="flex gap-9 items-center justify-center mt-8">
        <form>
          <input
            className="flex bg-slate-300 rounded-xl w-[350px] h-[30px] text-center"
            type="text"
            placeholder="Ürünü giriniz"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <FaSearch className="text-slate-700" size={20} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center items-center  mt-20">
        {currentItems.map((product, index) => (
          <Product product={product} key={product.id} />
        ))}
      </div>

      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Search;
