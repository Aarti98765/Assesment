import React from 'react';
import  Image1 from '../Image/Image1.png';
import  Image2 from '../Image/Image2.png';
import  Image3 from '../Image/Image3.png';
import  Calender from '../Image/Calender.png';
import  Category from '../Image/category.png';
import  Profile from '../Image/Profile.png';
import  Reset from '../Image/reset.png';
import  WallCalender from '../Image/wall-calendar.png';
import './Blog.css';


const blogData = [
    { image: Image1, text: "Document of the Month(DOM)", title: "Corporate & Business"},
    { image: Image2, text: "Social Media Articles", title: "Corporate & Business"},
    { image: Image3, text: "Chang Mag articles", title: "Corporate & Business" },
    { image: Image1, text: "Document of the Month(DOM)", title: "Corporate & Business" },
    { image: Image2, text: "Social Media Articles", title: "Corporate & Business" },
    { image: Image3, text: "Chang Mag articles", title: "Corporate & Business" },
    { image: Image1, text: "Document of the Month(DOM)", title: "Corporate & Business"},
    { image: Image2, text: "Social Media Articles", title: "Corporate & Business" },
    { image: Image3, text: "Chang Mag articles", title: "Corporate & Business" }
  ]

const Blog = () => {
    return (
        <>
        <div className='blogView'>
               <label className='blogText'>BLOGS</label>
                 <div className='textView'>    
                     <p>Located in Mumbai, Godrej Archives is the Godrej group's business archive. The Archives collects, preserves and manages records covering 121 years of the company's history. The idea was</p>
                     <p>mooted in 1997, the group's centenary year, by Mr. Sohrab Godrej, former chairman of the Godrej group</p>
                 </div>
        </div>  
        <div className='searchBoxShadow'>
            <input class="nosubmit" placeholder='Search Talks'></input>
            <div class="dropdown">
              <label className='categoryTxt'>Category</label>
              <div className='dropdownView'>
                 <img className='categoryIcon' src={Category} alt=""></img>
                 <label className='inputTxt'>Document of the Month (DOM)</label>
              </div>
              <label className='arrow'></label> 
            </div>
            <div class="datePicker">
            <label className='categoryTxt'>Date</label><br/>
            <div className='dropdownView'>
                 <img className='categoryIcon' src={WallCalender} alt=""></img>
                 <label className='inputTxt'>14-11-21 To 27-11-21</label>
            </div>
            <label className='arrow'></label>
            </div>
            <img key={Reset} alt="" className="reset" src={Reset} /> 
            <label className='resetBtn'>Reset</label>
            <button className='exploreBtn'>EXPLORE</button>
        </div>
        <div className='imageView'>      
        { blogData.map(item => (
              <React.Fragment key = {item.image}>
              <div className='blogItems'>  
              <img key={item.image} alt={item.image} className="imageCard" src={item.image} />  
              <label className='itemText'>  {item.text} </label>
              <label className='itemTitle'> {item.title} </label>
              <label className='oralHistory'> Oral History: Opportunities & challenges </label>
              <div className='blogDate'>
                <img key={Calender} alt={item.image} className="itemDateImage" src={Calender} /> 
                <label className='itemDate'>5th April 2021</label>
                 
              </div>
              <div className='blogName'>
                <img key={Profile} alt={item.image} className="nameIcon" src={Profile} /> 
                 <label className='itemName'>Aruna Ranjan</label> 
              </div>
              
              </div>
              </React.Fragment>
          ))
        }
        </div>
        </>
    )
}    


export default Blog;