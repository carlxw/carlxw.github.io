import image from "../data/img/cartoonme.png";

const Hello = () => {   
    const date = new Date();

    return (
        <div>
            <div className="homepage flex-row">
                <div className="homepage_left flex-col">
                    <h1 id="homepage_h1">You get free money</h1>
                    <div id="homepage_text">
                        <p>Just kidding! Now that I have your attention, Hi! My name is Carl and I am a { date.getFullYear() - 2004 } years old student studying Computer Engineering at the University of Waterloo!</p>
                        <p>My favourite quote is from Bill Gates: <em>“I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.”</em></p>
                        <p>If you ever want to connect, feel free to find my socials below!</p>
                    </div>
                </div>
                <div className="homepage_right">
                    <img id="hello_img" src={ image } alt="Cartoon me" />
                </div>
            </div>
        </div>
    );
}

export default Hello;