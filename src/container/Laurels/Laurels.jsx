import React from 'react';
import Images from "../../constants/images";
import Data from "../../constants/data";
import { SubHeading } from "../../components";
import './Laurels.css';

const AwardCard =({award : {imgUrl , title , subtitle}}) =>(
  <div className="app__laurels__awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels__awards-card_content">
      <p className='p__cormorant' style={{color : '#dcca87'}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title='Awards & recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className="app__laurels__awards">
        {Data.awards.map(award => <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={Images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
