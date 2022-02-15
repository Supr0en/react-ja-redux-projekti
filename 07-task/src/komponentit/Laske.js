import React, {useState} from "react";

const Laske = (props) =>{

    const laskuri = (luku1, luku2) => {
        while (luku1 && luku2 && luku1 !== luku2)
        if(luku1 > luku2){
            [luku1, luku2] = [luku1 - luku2, luku2];
        } else {
            [luku1, luku2] = [luku1, luku2 - luku1];
        };
        return luku1 || luku2;
    };

    return (
        <form>
            <p><span className="form-label">{laskuri(props.luku1, props.luku2)} </span></p>
        </form>
    );
}

export default Laske;