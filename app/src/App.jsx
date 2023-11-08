import { useEffect, useState } from "react";
import styled from "styled-components"
import Search from "./Search"

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [url,setUrl] = useState(null);
  const [filterdata, setFilterdata] = useState(null);
  const [selectedbutton , setSelectedbutton] = useState(null);
  useEffect(()=>
  {
    const fetchdata = async () =>
  {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setUrl(json);
      setFilterdata(json);
  }
    fetchdata();
  },[]);

  const changeHappen = (e) =>
  {
    const searchvalue = e.target.value;

    if(searchvalue =="")
    {
      setFilterdata(null);
    }
    const filter = url?.filter((food) =>
    
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFilterdata(filter);
  }

  const clicked = (type) =>
  {
      if (type == "all")
      {
        setFilterdata(url);
        selectedbutton("all");
        return;
      }
      const filter = url?.filter((food) =>
    
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterdata(filter);
    setSelectedbutton(type);
  }

  return <>

    
       <Topcomponent>
          <p>Foody Zone</p>
          <div className="search">
            <input onChange={changeHappen} placeholder="Search here" type="text" ></input>
          </div>
       </Topcomponent>
       <Filtercomponent>
          <div className="filter">
            <ul>
              <li><button onClick={() => clicked("all")} >All</button></li>
              <li><button onClick={() => clicked("breakfast")}>Breakfast</button></li>
              <li><button onClick={() => clicked("lunch")}>Lunch</button></li>
              <li><button onClick={() => clicked("dinner")}>Dinner</button></li>
            </ul>
          </div>
       </Filtercomponent>
       <Search data={filterdata} />
  </>;
};
 
const Topcomponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  p
  {
    font-size: 32px;
    font-weight: 700;
  }
  .search input
  {
    height: 40px;
    border: 2px solid red;
    border-radius: 10px;
    font-size: 16px;
    padding: 0 10px;
    background-color: transparent;
    color: white;
  }
`
const Filtercomponent = styled.div`
  padding-bottom: 40px;
 .filter ul
 {
   display: flex;
   justify-content: center;
   list-style: none;
   gap: 20px;
 }
 .filter ul li button
 {
   border: 1px solid #FF4343;
   border-radius: 5px;
   padding: 6px 12px 6px 12px;
   background-color: #FF4343;
   cursor: pointer;
   font-size: 16px;
   font-weight: 400;
 }
`


export default App;
