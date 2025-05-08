import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterProps {
  city: string;
  rating: string;
  expertise: string;
  experience: string;
}
interface InitialStateProps {
  filters: FilterProps;
}

interface FilterPayload {
  key: string;
  filterValue: string;
}

const initialState: InitialStateProps = {
  filters: {
    city: "",
    rating: "",
    expertise: "",
    experience: "",
  },
};

const advisorSlice = createSlice({
  name: "advisor",
  initialState,
  reducers: {
    applyFilter: (state, action: PayloadAction<FilterPayload>) => {
      const { key, filterValue } = action.payload;

      state.filters[key as keyof FilterProps] = filterValue;
    },
    removeFilter: (state, action) => {},
  },
});

export const { applyFilter, removeFilter } = advisorSlice.actions;

export default advisorSlice.reducer;
