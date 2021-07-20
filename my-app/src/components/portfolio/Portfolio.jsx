import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import  "./portfolio.scss";
import { 
     featuredPortfolio,
     webPortfolio,
     projectPortfolio,
} from "../../data";



export default function Portfolio() {
//when ever one list id is selected its going to be active class
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
    //dynamic active class
    const list = [ 
        {
         id: "featured",
         title: "Featured",
        },
        {
            id: "web",
             title:"web apps",

        },
          {
              id:"project",
              title:"Projects",
          },
    ];
//switch case structure 
   useEffect(() => {
     switch(selected) { 
         case "featured":
             setData(featuredPortfolio);
             break;
             case "web":
                 setData(webPortfolio);
                 break;
                  case "project": 
                    setData(projectPortfolio);
                       break;
                        default: 
                        setData(featuredPortfolio);
     }
   }, [selected]);
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
                    {data.map((d) => (
                        <div className="item">
                            
                            <img 
                            src={d.img}
                            alt=""
                            />
                            <h3>{d.title}</h3>
                            </div>
                    ))}
                     </div>
               </div>
    );
}
