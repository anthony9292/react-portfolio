import "./menu.scss";

export  default function Menu()  {
    return (
        /*hyperlink for sections in topbar*/
        <div className="menu">
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact Info</a>
                </li> 
            </ul>
            
        </div>
    )
}
