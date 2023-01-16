export default {
  setData(state, payload) {
    state.countries = payload.countries;
  },
  setAdd(state, payload) {
    state.list.push(payload.list);
  },
};
