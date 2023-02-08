const SkillsCard = ({ data }) => {
    const render = [];
    for (var i = 0; i < data.length; i++) {
        render.push(
            <div key={ data[i].title }>
                <h2 id={ data[i].title }>{ data[i].title }</h2>
                <img style={ {width: 50, height: 50} } src={ require(`../data/img/${data[i].img}`) } alt="icon" />
                <p>{ data[i].desc }</p>
            </div>
        );
    }

    return (
        <div className="skills_card">
            {/* This renders an array */}
            { render }
        </div>
    );
}

export default SkillsCard;