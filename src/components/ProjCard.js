import "../css/ProjCard.css";
import { AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const ProjCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        // Extract the tags and list-description
        const tags = data[i].tags.map((x) => (
            x.link ? <a className="bubble" href={ x.link } target="_blank" rel="noreferrer" key={ x.title }>{ x.title }<FiExternalLink className="icon" /></a> : <p className="bubble" id="nolink" key={ x.title }>{ x.title }</p>
        ));

        const desc = data[i].desc.map((x) => (
            // Key will raise problems if I use the same description over and over?
            <li className="list" style={{ "color": "black" }} key={ x } >{ x }</li>
        ));

        render.push(
            <div className="proj_card" key={ data[i].title }>
                <div className="proj_cardcontent">
                    <div className="proj_left">
                        <h2 id={ data[i].title }>{ data[i].title }</h2>
                        <p>{ data[i].header }</p>
                        <p id="story">{ `"${ data[i].story }"` }</p>
                        <ul key={ data[i].desc }>{ desc }</ul>
                    </div>
                    
                    <div className="proj_right">
                        <img src={ require(`../data/img/${ data[i].img }`) } alt="logo" />
                    </div>
                    <div className="cls" />
                </div>

                <div className="proj_footer">
                    <div className="links">
                        {
                            data[i].github && <a className="bubble" href={ data[i].github } target="_blank" rel="noreferrer">GitHub <AiFillGithub className="icon" /></a>
                        }
                        {   
                            // If there is a Devpost link
                            data[i].devpost && <a className="bubble" href={ data[i].devpost } target="_blank" rel="noreferrer">DevPost<SiDevpost className="icon" /></a>
                        }
                    </div>

                    <div className="tags">{ data[i].tags && tags }</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* This renders an array */}
            { render }
        </div>
    );
}

export default ProjCard;