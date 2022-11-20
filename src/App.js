import './App.css';
import React, {useState} from "react";

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [euclidean, setEuclidean] = useState(undefined);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    function gcd2(a, b) {
        let x = 0;
        let y = 1;
        let lastx = 1;
        let lasty = 0;
        while (b !== 0) {
            let q = a / b;
            let r = a % b;

            a = b;
            b = r;

            let temp = x;
            x = lastx - (q * x);
            lastx = temp;

            temp = y;
            y = lasty - (q * y);
            lasty = temp;
        }

        return {
            "gcd": parseInt(a),
            "x": parseInt(lastx),
            "y": parseInt(lasty)
        }
    }

    function gcd3(pa, pb, pc) {
        let a = parseInt(pa);
        let b = parseInt(pb);
        let c = parseInt(pc);

        if (a === 0 || b === 0 || c === 0) {
            setA(0);
            setB(0);
            setC(0);
            setEuclidean(undefined);
            alert("Żaden z wpółczynników a, b, c nie może być = 0");
        } else {
            let xy0 = gcd2(b, c)
            let xy1 = gcd2(a, xy0.gcd)
            let y = (xy1.y * xy0.x)
            let z = (xy1.y * xy0.y)

            setEuclidean({
                "gcd": xy1.gcd,
                "x": xy1.x,
                "y": y,
                "z": z
            })
            console.log(euclidean)
        }
    }

    const handleChange = event => {
        gcd3(a, b, c);
    }

    return (
        <div className="App" style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
        }}>
            <div style={{
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50vw"
            }}>
                <div style={{height: "33%"}}>
                    <h1 style={{color: "#6d88c7"}}>Euclidean algorithm for GCD(a, b, c)</h1>
                    <h2 style={{color: "#6d88c7"}}>ax + by + cz = (a, b, c)</h2>
                </div>
                <div style={{display: "flex", justifyContent: "space-evenly", height: "33%"}}>
                    <label style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#6d88c7", fontWeight: "bold", fontSize: "1em"}}>a:&nbsp;<input
                        type="number" onChange={event => setA(event.target.value)} value={a} min="0"
                        id="aParam"/></label>
                    <label style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#6d88c7", fontWeight: "bold", fontSize: "1em"}}>b:&nbsp;<input
                        type="number" onChange={event => setB(event.target.value)} value={b} min="0"
                        id="bParam"/></label>
                    <label style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#6d88c7", fontWeight: "bold", fontSize: "1em"}}>c:&nbsp;<input
                        style={{marginRight: "5px"}}
                        type="number" onChange={event => setC(event.target.value)} value={c} min="0"
                        id="cParam"/></label>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "33%", flexDirection: "column"}}>
                    <h2 style={{color: "#6d88c7", fontWeight: "bold"}}>
                        {euclidean === undefined ? "" : "(a, b, c) = " + euclidean.gcd + ", x = " + euclidean.x + ", y = " + euclidean.y + ", z= " + euclidean.z}
                    </h2>
                    <h2 style={{color: "#6d88c7", fontWeight: "bold"}}>
                        {euclidean === undefined ? "" : a + " * " + euclidean.x + " + " + b + " * " + euclidean.y + " + " + c + " * " + euclidean.z + " = " + euclidean.gcd}
                    </h2>
                </div>
            </div>
            <div style={{
                height: "25vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "50vw",
                alignItems: "center"
            }}>
                <button onClick={event => handleChange(event)} style={
                    {
                        width: "50%",
                        background: isHovering ? "#346beb" : "#6d88c7",
                        padding: "10px",
                        color: "white",
                        fontWeight: "bold",
                        border: "none",
                        hover: "white",
                        borderRadius: "10px"
                    }
                } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Calculate result
                </button>
            </div>
        </div>
    );
}

export default App;