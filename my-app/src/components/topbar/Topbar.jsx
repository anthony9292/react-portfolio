import  './topbar.scss';
import {PhoneAndroid,Email} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left"> 
                        <a href="#intros" className="logo"> NDEGWA.</a> 
                        <div className="itemContainer">
                            <PhoneAndroid className="icon"/>
                            <span>613-501-4892</span>
                        </div>
                        <div className="itemContainer"> 
                         <Email className="icon"/> 
                         <span>anthon.n24@gmail.com</span>
                        
                        </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                
                        
                </div>
            </div>
        </div>
    )
}
