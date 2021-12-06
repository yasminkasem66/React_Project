import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Store/actions/ProductActions/getAllProducts";
import { useNavigate } from "react-router";


function SearchBar() {
    const navigate = useNavigate()
    const products = useSelector(state => state.AllProducts)
    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(getAllProducts());
          
        }, []);
        console.log("products in search",products)
        

  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [wordEntered, setWordEntered] = useState("");



  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = products.filter((product) => {
      return product.categoryparent.toLowerCase().includes(searchWord.toLowerCase());
    
    });
    const newFilter2 = products.filter((product) => {
        return product.category.toLowerCase().includes(searchWord.toLowerCase());
      
      });
    const key = "categoryparent"
    const arrayUniqueByKey = [...new Map(newFilter.map(item =>
    [item[key], item])).values()];
    const key2 = "category"
    const arrayUniqueByKey2 = [...new Map(newFilter2.map(item =>
    [item[key2], item])).values()];

    arrayUniqueByKey.push(...arrayUniqueByKey2)

    //  console.log("asdas",arrayUniqueByKey)




    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(arrayUniqueByKey);
    //   setFilteredData2(arrayUniqueByKey2)
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

//   let aa=new Set(filteredData)
// const key = "category"
// const arrayUniqueByKey = [...new Map(filteredData.map(item =>
//     [item[key], item])).values()];

    // console.log("asdas",arrayUniqueByKey)
    const getCategoty=(e)=>{
        setselectedCategory(e.target.innerText)
        localStorage.setItem("searchValue",e.target.innerText)
        navigate("/productaftersearch")
        // console.log(e.target.innerText)
    }
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          className=""
          placeholder="search..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                <>
              <a onClick={getCategoty} className="dataItem"  >
                <p >{value.categoryparent} 
                 </p>
                
              </a>
              <a onClick={getCategoty} className="dataItem"  >
                <p>{value.category} 
                 </p>
                
              </a>

              </>
              
            );
          })}
         
        </div>
        
      )}
    </div>
  );
}

export default SearchBar;
