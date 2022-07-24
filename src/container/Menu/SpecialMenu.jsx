import React from "react";
import Images from "../../constants/images";
import Data from "../../constants/data";
import { MenuItem, SubHeading } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-drinks flex__center">
        <p className="app__specialMenu-menu_heading">Drinks & Beer</p>
        <div className="app__specialMenu-menu_items">
          {Data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={Images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu-cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {Data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop :'15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
