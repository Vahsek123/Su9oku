import { createSlice } from '@reduxjs/toolkit';

type TestSlice = {
  counter: number;
};

const INITIAL_STATE: TestSlice = {
  counter: 0,
};

const testSlice = createSlice({
  name: 'test',
  initialState: INITIAL_STATE,
  reducers: {
    counterIncremented: (state) => {
      state.counter += 1;
    },
    counterDecremented: (state) => {
      state.counter -= 1;
    },
    counterReset: (state) => {
      state.counter = INITIAL_STATE.counter;
    },
  },
  selectors: {
    selectCounter: (sliceState) => sliceState.counter,
  },
});

export const { counterIncremented, counterDecremented, counterReset } =
  testSlice.actions;
export const { selectCounter } = testSlice.selectors;
export default testSlice.reducer;
