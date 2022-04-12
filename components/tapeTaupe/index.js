import Taupe from "./Taupe";
import {useEffect, useState} from "react";
import _ from "lodash";
import Grid from '@mui/material/Grid';

export default function Game({nbTaupes}) {
    const [up, setUp] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
            if (up == null) {
                setUp(_.random(0, nbTaupes - 1));
            } else {
                setUp(null);
                setScore(s => s - 1);
            }
        }, 1000);
        return () => {
            clearTimeout(id);
        }
    }, [up]);

    useEffect(() => {
    }, [score]);

    const taupes = new Array(nbTaupes).fill(true).map((value, index) => index);

    return (
        <div style={{textAlign: "center"}}>
            <h1>Tape Taupe Game</h1>
            <h3>Score : {score}</h3>
            <Grid container direction='row' justifyContent='space-around' alignItems='center'>
                {taupes.map((value) => {
                    const isUp = (value === up);
                    return (
                        <Grid item key={value} xs={4}>
                            <Taupe isUp={isUp} onClick={() => {
                                if (isUp) {
                                    setScore((s) =>s + 1);
                                    setUp(null);
                                } else {
                                    setScore((s) =>s - 1);
                                }
                            }} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}