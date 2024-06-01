import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";
import Loading from "../Loading";
import ProductImportant from "./ProductImportant";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Products = ({ sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 24;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = Array.isArray(products)
    ? products.slice(itemOffset, endOffset)
    : [];
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap font-extralight text-xs">
            {currentItems
              .sort((a, b) =>
                sort === "inc"
                  ? a.price - b.price
                  : sort === "dec"
                  ? b.price - a.price
                  : null
              )
              .map((product, i) => (
                <ProductImportant key={i} product={product} />
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
        </>
      )}
    </div>
  );
};

export default Products;
