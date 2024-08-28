import { CDN_URL } from "../utils/constants" 

const RestaurantCard = (props) => {
    const { resData } = props
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info
    const {deliveryTime} = resData?.info.sla
    return (
      <div className="rest-container">
        <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
          <img className="rest-logo" alt="res-logo" src={CDN_URL
            + cloudinaryImageId}
          />
          <h3>{name} </h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
  
        </div>
      </div>
    )
  }

  
  export default RestaurantCard;