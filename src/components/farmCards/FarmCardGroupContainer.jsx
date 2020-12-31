import React, { useEffect, useContext } from "react";
import harvest from "../../lib/index";
import HarvestContext from "../../Context/HarvestContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/appStyles";
import FarmCard from "./FarmCard";
import { FarmGroupContainerWrapper } from "./FarmCardStyles";
const { utils } = harvest;

function FarmCardGroupContainer() {
    const { state, setState } = useContext(HarvestContext);
    const getThisReward = (reward) => {
        setState({
            ...state,
            minimumHarversAmount: reward
        });
    }

    const getTotalFarmEarned = () => {
        let total = 0;
        if (state.summaries.length) {
            state.summaries.map(utils.prettyPosition).map((summary) => {
                total += parseFloat(summary.historicalRewards);
                setState({
                    ...state,
                    totalFarmEarned: (state.totalFarmEarned = total)
                });
            });
        }
    }


    useEffect(() => {
        if (!state.totalFarmEarned) {
            getTotalFarmEarned();
        }
    }, [state.summaries]);

    useEffect(() => {
        const timer = setTimeout(() => {
            getTotalFarmEarned();
        }, 60000);
        return () => clearTimeout(timer);
    });

    return (
        <ThemeProvider theme={state.theme == "dark" ? darkTheme : lightTheme}>
            {state.summaries.length ? (
                <FarmGroupContainerWrapper>
                    {state.summaries.map(utils.prettyPosition).map((summary) => {
                        return (<FarmCard key={summary.address} summary_information={summary} />)
                    })}
                </FarmGroupContainerWrapper>
            ) : (<p>Nothing to see here yet.</p>)}
        </ThemeProvider>
    )
}


export default FarmCardGroupContainer;