import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import  "./portfolio.scss";
export default function Portfolio() {
//when ever one list id is selected its going to be active class
  const [selected, setSelected] = useState("featured");
    //dynamic active class
    const list = [ 
        {
         id: "Featured",
         title: "Featured",
        },
        {
            id: "Web",
             title:"Web Apps",

        },
          {
              id:"Project",
              title:"Projects",
          },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    
                    <PortfolioList
                     title={item.title}  active={selected === item.id}
                      setSelected={setSelected}
                      id={item.id}
                      />
                ))}
            
            </ul>
                <div className="container">
                    <div className="item">
                        <img src="assets/plansurfing.png" alt=""/>
                        <h3>Web apps</h3>
                    </div>
                    <div className="item">
                        <img src="assets/plansurfing.png" alt=""/>
                        <h3>Front end apps</h3>
                    </div>
                    <div className="item">
                        <img src="assets/plansurfing.png" alt=""/>
                        <h3>Plan Surfing app</h3>
                    </div>
                </div>
        </div>
    )
}
