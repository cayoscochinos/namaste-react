import './App.css';

//Header
// - Logo
// - Nav Items

//Body
// - Search
// - Restaurant Container
//  - Restaurant Card
//  - Dish Name
//  - Image
//  - Restaurant Name
//  - Rating
//  - Cuisines
//  - Time to Deliver

// Footer
// - Copyright
// - Links
// - Address
// - Contact 


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="" />

      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { restObj } = props
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = restObj?.info
  const {deliveryTime} = restObj?.info.sla
  return (
    <div className="rest-container">
      <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="rest-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
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


const resList = [
  {
    info: {
      id: "378344",
      name: "Theobroma",
      cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: [
        "Desserts"
      ],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-28 00:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet"
          }
        ],
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/perfect-cake-3.svg",
            shortDescription: "Perfect cake delivery",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png"
                }
              }
            ]
          },
          textBased: {
            
          },
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/perfect-cake-3.svg",
                  shortDescription: "Perfect cake delivery"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
  
          },
          video: {
  
          }
        }
      },
      reviewsSummary: {
  
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
  
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "100+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
  
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-banjara-hills-hyderabad-378344",
      type: "WEBLINK"
    }
  },
  
  {
    info: {
      id: "655339",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG",
      locality: "Gudimalkapur",
      areaName: "Inner Ring Road",
      costForTwo: "₹400 for two",
      cuisines: [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-28 01:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          textBased: {
  
          },
          textExtendedBadges: {
  
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
  
          },
          video: {
  
          }
        }
      },
      reviewsSummary: {
  
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
  
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
  
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-gudimalkapur-inner-ring-road-hyderabad-655339",
      type: "WEBLINK"
    }
  },
  
  {
    info: {
      id: "11091",
      name: "Pizza Hut",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg",
      locality: "Attapur",
      areaName: "Attapur",
      costForTwo: "₹350 for two",
      cuisines: [
        "Pizzas"
      ],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-28 04:00:00",
        opened: true
      },
      badges: {
  
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
  
          },
          textBased: {
  
          },
          textExtendedBadges: {
  
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
  
          },
          video: {
  
          }
        }
      },
      reviewsSummary: {
  
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
  
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "1K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
  
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-attapur-hyderabad-11091",
      type: "WEBLINK"
    }
  }
  


]



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {
          resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id}resData={restaurant} />
          ))
        }
      </div>
    </div>
  )
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

export default AppLayout;
