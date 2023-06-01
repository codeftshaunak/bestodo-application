export interface StateItem {
    status: string;
    colors: string[];
}

export const initialState: StateItem[] = [{
    status: "All",
    colors: []
}];
