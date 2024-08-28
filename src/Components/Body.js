import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react"



const Body = () => {
  const [listofRest, setListOfrest] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={()=> {
          setListOfrest(resList.filter(item => item.info.avgRating >= 4.5))

          console.log("clicked")
        }}>Top Rated Restaurant</button>
        </div>
        <div className="rest-container">
          {
            listofRest.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id}resData={restaurant} />
            ))
          }
        </div>
      </div>
    )
  }


  export default Body;