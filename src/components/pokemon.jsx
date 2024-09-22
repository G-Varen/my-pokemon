const Pokenom = (props) => {
    console.log(props.index);
    return (

        <div className="poke-card">
            <h5>{props.name}</h5>
            <div className="poke-img">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index}.png`}
                    alt={`Pokemon ${props.name}`}
                    height={"200px"}
                    width={"200px"}
                />
                <div className="poke-type">
                    <h6>Type</h6>
                    {
                        props.type.map((typeItem, index)=>{
                            return <span key={index}>{typeItem}</span>
                        })
                    }
                </div>
            </div>
            <div>
                <div className="poke-base">
                    <h6>HP</h6>
                    <progress value={props.hp} max={100} />
                    <span>{props.hp}</span>
                </div>
                <div className="poke-base">
                    <h6>Attack</h6>
                    <progress value={props.attack} max={100} />
                    <span>{props.attack}</span>
                </div>
                <div className="poke-base">
                    <h6>Defense</h6>
                    <progress value={props.defense} max={100} />
                    <span>{props.defense}</span>
                </div>
            </div>
        </div>
    )
}

export default Pokenom;