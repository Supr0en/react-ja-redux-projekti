const Laske = (props) =>{

    const laskuri = (luku1, luku2) => {
        let tulos;

        for(let i = 1; i <= luku1 && i <= luku2; i++) {
            if(luku1 % i === 0 && luku2 % i === 0) {
                tulos = i;
            }
        }
        return tulos;
    };

    return (
        <form>
            <p><span className="form-label">{laskuri(props.luku1, props.luku2)} </span></p>
        </form>
    );
}

export default Laske;