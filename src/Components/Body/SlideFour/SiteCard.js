import "./Sitecard.css";
import { BsThreeDotsVertical,BsWindowDock } from "react-icons/bs";


function SiteCard(props) {
  return (
    <div className="block">
      <div className="siteCard">
        <div className="siteInfo">
          <div className="name">{props.name}</div>
          <div className="datePosition">Date Added :-</div>
          <div className="date">12/10/2020</div>

          <div className="siteButton">
            <br />
            {props.children}
            <button className="visitButton">
              <div className="visitLogo">
                <BsWindowDock></BsWindowDock>
                </div>
              <div className="partition">
                
              <BsThreeDotsVertical size={15} color="rgb(54, 110, 173)"></BsThreeDotsVertical>

              </div>
              <div className="visit">Visit</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
