import React from 'react';
import './Desktop.css';
import Taskbar from '../Taskbar/Taskbar';

const Desktop = () => {
    return (
        <div className="main_desktop" style={{ backgroundImage: "url(img/walpaper.jpg)"}}>
         <Taskbar />   
        </div>
    )
}
export default Desktop