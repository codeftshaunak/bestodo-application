export interface StateItem {
    status: string;
    colors: string[];
}

const initialState: StateItem = {
    status: "All",
    colors: []
};

export default initialState;
