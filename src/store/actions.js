export const CHANGE_SCENARIO = 'CHANGE_SCENARIO';

export const changeScenario = (id) => {
    return {
        type: CHANGE_SCENARIO,
        scenarioId: id
    };
};


// EXEMPLE ASYNC
// export const saveStatsEvac = (count) => {
//     return {
//         type: CHANGE_STATS_EVAC,
//         statsCount: count
//     };
// };
//
// export const storeStatsEvac = (count) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveStatsEvac(count));
//         }, 2000);
//     }
// };
