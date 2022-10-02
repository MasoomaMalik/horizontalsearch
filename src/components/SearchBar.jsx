import React, { useState } from "react";
import { Paper,Stack, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavbarSub from "./NavbarSub";
const SearchBar = () => {
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const navigate = useNavigate();

  //   const onhandleSubmit = (e) => {
  //     e.preventDefault();

  //     if (searchTerm) {
  //       navigate(`/search/${searchTerm}`);

  //       setSearchTerm('');
  //     }
  //   };
//   let searchItem = (val) => {
//     let filteredList = data.filter(
//       (x) =>
//         x.category == filterArray &&
//         x.title.toLowerCase().includes(val.toLowerCase())
//     );
//     setFilterList([...filteredList]);
//   };

  return (
    <Stack
      component="form"
      direction="row"
      //   onSubmit={onhandleSubmit}
      sx={{
     
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
                
            p:2
          }}
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </span>
      <span>
        <Typography 
           className='searchbar-text'
           
           
           sx={{
            p:1 ,
            pl:5,
            borderRadius:20,

            background:'#ff6a00'
        }}>Search</Typography>
      </span>
    </Stack>
  );
};

export default SearchBar;
