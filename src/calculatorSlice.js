import {
    createSlice
} from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        mainValue: "",
        storagedValue: "",
        storagedValueDisplay: "",
        operation: "",
        equal: "",
        functonalOperation: "",
        power: false,
        disable: true,
    },
    reducers: {
        power: (state, action) => {
            state.power = !state.power
            state.disable = !state.disable
            if (!state.power) {
                state.storagedValue = "";
                state.storagedValueDisplay = "";
                state.equal = "";
            }
            state.mainValue = !state.power ? "" : "0"

        },
        mainValue: (state, action) => {
            if (action.payload === ".") {
                if (state.mainValue !== "" && state.mainValue.indexOf(".") === -1 && state.equal === "") {
                    console.log("1232131");
                    state.mainValue = state.mainValue + action.payload
                }
            } else if (action.payload === "-") {
                if (state.mainValue === "0") {
                    state.mainValue = "-"
                }

            } else if (state.equal && action.payload !== ".") {
                state.mainValue = "";
                state.storagedValue = "";
                state.storagedValueDisplay = "";
                state.equal = "";
                state.mainValue = state.mainValue + action.payload
            } else if (state.mainValue === "0") {
                state.mainValue = ""
                state.mainValue = state.mainValue + action.payload
            } else {
                state.mainValue = state.mainValue + action.payload
            }
        },
        operation: (state, action) => {
            if (state.storagedValue) {
                switch (state.operation) {
                    case "/":
                        state.storagedValue = Number(state.storagedValue) / Number(state.mainValue);
                        state.operation = action.payload;
                        state.storagedValueDisplay = state.storagedValue + state.operation
                        state.mainValue = "";
                        break;
                    case "*":
                        state.storagedValue = Number(state.storagedValue) * Number(state.mainValue);
                        state.operation = action.payload;
                        state.storagedValueDisplay = state.storagedValue + state.operation
                        state.mainValue = "";
                        break;
                    case "-":
                        state.storagedValue = Number(state.storagedValue) - Number(state.mainValue);
                        state.operation = action.payload;
                        state.storagedValueDisplay = state.storagedValue + state.operation
                        state.mainValue = "";
                        break;
                    case "+":
                        state.storagedValue = Number(state.storagedValue) + Number(state.mainValue);
                        state.operation = action.payload;
                        state.storagedValueDisplay = state.storagedValue + state.operation
                        state.mainValue = "";
                        break;
                    default:
                        break;
                }
            } else {
                state.operation = action.payload;
                state.storagedValue = state.mainValue;
                state.storagedValueDisplay = `${state.mainValue} ${state.operation}`;
                state.mainValue = "";
            }
        },
        equal: (state, action) => {
            switch (state.operation) {
                case "/":
                    state.equal = Number(state.storagedValue) / Number(state.mainValue);
                    state.mainValue = state.equal;
                    break;
                case "*":
                    state.equal = Number(state.storagedValue) * Number(state.mainValue);
                    state.mainValue = state.equal;
                    break;
                case "-":
                    state.equal = Number(state.storagedValue) - Number(state.mainValue);
                    state.mainValue = state.equal;
                    break;
                case "+":
                    state.equal = Number(state.storagedValue) + Number(state.mainValue);
                    state.mainValue = state.equal;
                    break;
                case "%":
                    state.equal = (100 * Number(state.storagedValue)) / Number(state.mainValue);
                    state.mainValue = state.equal;
                    break;
                default:
                    break;
            }
            state.storagedValue = ""
            state.storagedValueDisplay = ""
        },
        functonalOperation: (state, action) => {
            state.functonalOperation = action.payload
            switch (state.functonalOperation) {
                case "C":
                    state.mainValue = "0";
                    break;
                case "CE":
                    state.mainValue = "0";
                    state.storagedValue = "";
                    state.storagedValueDisplay = "";
                    break;
                case "backSpace":
                    state.equal === "" && state.mainValue.length && (state.mainValue = state.mainValue.substring(0, state.mainValue.length - 1));
                    state.mainValue.length === 0 && (state.mainValue = "0");
                    break;
                case "squareRoot":
                    if (state.storagedValue !== "") {
                        state.mainValue = Math.sqrt(state.storagedValue);
                    } else if (state.mainValue !== "") {
                        state.mainValue = Math.sqrt(state.mainValue);
                        state.storagedValue = ""
                    }
                    break;
                default:
                    break;
            }
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    mainValue,
    operation,
    storagedValue,
    equal,
    storagedValueDisplay,
    functonalOperation,
    power,
    disable,
    dot
} = calculatorSlice.actions;

export default calculatorSlice.reducer;