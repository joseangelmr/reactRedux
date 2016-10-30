/**
 * Created by joseangelmr on 30/10/16.
 */
const actions = {
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    DECREMENT_COUNTER: "DECREMENT_COUNTER",

    increment: () => ({
        type: actions.INCREMENT_COUNTER,
    }),

    decrement: () => ({
        type: actions.DECREMENT_COUNTER,
    })
};

module.exports = actions;