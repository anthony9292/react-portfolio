import "./portfolioList.scss"

export default  function PortfolioList({ id, item, title, active, setSelected }) {
    return (
     <li 
    className={active ? "portfolioList active" : "portfolioList"} 
    //on click effect to grab list id and display
    onClick={() => setSelected(id)}
      >
            {title}
        </li>
    );
}

