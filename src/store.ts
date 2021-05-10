// import { InjectionKey } from "vue";
import { createStore } from "vuex";

// define your typings for the store state
export interface State {
  count: number;
}

// define injection key
// export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
