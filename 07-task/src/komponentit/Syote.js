import React, {useState} from "react";
import Laske from "./Laske";

const Syote = () => {
    const [luku1, setluku1] = useState();
    const [luku2, setluku2] = useState();

    return (
        <section>
            <form>
                <input aria-describedby="luku1" id="luku1" type="text" onChange={(e) => setluku1(e.target.value)} />
                <input aria-describedby="luku2" id="luku2" type="text" onChange={(e) => setluku2(e.target.value)} />
            </form>
            <Laske luku1={luku1} luku2={luku2} />
        </section>
    );
}

export default Syote;