import React, { useState } from "react";
import { Paper,Stack, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavbarSub from "./NavbarSub";
const SearchBar = ({filterList, setFilterList,data}) => {
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const navigate = useNavigate();

  //   const onhandleSubmit = (e) => {
  //     e.preventDefault();

  //     if (searchTerm) {
  //       navigate(`/search/${searchTerm}`);

  //       setSearchTerm('');
  //     }
  //   };
  let searchItem = (val) => {

console.log(" filter list by searchjsx")
console.log(filterList)
    let filteredList = filterList.filter(
      (x) =>
        
        x.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterList([...filteredList]);
  };

  return (
    <Stack
      component="form"
      direction="row"
      //   onSubmit={onhandleSubmit}
      sx={{
  my:3,
        ml: 5 ,
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        // pl: 2,
        boxShadow: "none",
        // mr: { sm: 5 },
      justifyContent: "space-between",


      }}
      className="search-container"
    >
      <span>
        <input
        
          className="search-bar"
          onChange={(e) => searchItem(e.target.value)}
          sx={{  
                
            p:2,
          
          }}
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </span>
      <span>
        <button 
           className='searchbar-text  '
           
           
        
        >Search</button>
      </span>
    </Stack>
    
  );
};

export default SearchBar;
