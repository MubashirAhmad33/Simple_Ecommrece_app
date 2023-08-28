import React, { useState } from "react";

const Card = ({
  productlist,
  addtocart,
  cartitem,
  setCartItem,
  uniqueCategories,
  filteredData,
}) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(""); // Updated state for selected category

  const totalPages = Math.ceil(productlist.length / itemsPerPage);
  const startindex = (currentPage - 1) * itemsPerPage;
  const endindex = startindex + itemsPerPage;
  const currentPageData = productlist.slice(startindex, endindex);

  const toggleCartItem = (item) => {
    const itemIndex = cartitem.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      // Item is already in the cart, remove it
      const temp = [...cartitem];
      temp.splice(itemIndex, 1);
      setCartItem(temp);
    } else {
      // Item is not in the cart, add it
      setCartItem([...cartitem, { ...item, count: 1 }]);
    }
  };

  const getFilteredProducts = () => {
    if (selectedCategory === "") {
      // If no category is selected, return all products
      return currentPageData;
    } else {
      // If a category is selected, filter products by the selected category
      return currentPageData.filter(
        (product) => product.category === selectedCategory
      );
    }
  };

  const handleCategoryClick = (category) => {
    // Set the selected category when a category button is clicked
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="category">
        {/* Display category buttons */}

        {uniqueCategories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="Card-Control">
        {/* Display current page data */}
        {getFilteredProducts().map((item, index) => (
          <div className="Card" key={index}>
            <h1 className="title">{item.title.slice(0, 20)}</h1>
            <img src={item.image} alt="" />
            <p className="description">{item.description.slice(0, 100)}</p>
            <button className="btn" onClick={() => toggleCartItem(item)}>
              {cartitem.findIndex((cartItem) => cartItem.id === item.id) !== -1
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {/* Display pagination buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <div className="btn-container" key={index}>
            {index === currentPage - 1 && currentPage > 1 && (
              <button
                className="btn"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>
            )}
            {index === currentPage && (
              <button className="active" onClick={() => setCurrentPage(index)}>
                {index}
              </button>
            )}
            {index === currentPage + 1 && currentPage < totalPages && (
              <button
                className="btn"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
// {index + 1}
export default Card;
