import axios from "axios";

const APIBASEURL = "https://jim.pakundia.me/api";

// state
export const state = {
  bloodList: null,
  bloodSingle: null,
  loading: false,
  currentBloodGroup: null
};

// getters
export const getters = {
  bloodList: state => state.bloodList,
  bloodSingle: state => state.bloodSingle,
  loading: state => state.loading
};

// mutations
export const mutations = {
  setBloodList(state, payload) {
    state.loading = false;
    state.bloodList = payload;
  },
  setBloodSingle(state, payload) {
    state.loading = false;
    state.bloodSingle = payload;
  },

  startLoading(state) {
    state.loading = true;
  },

  setCurrentGroup(state, payload) {
    state.currentBloodGroup = payload;
  },
  stopLoading(state) {
    state.loading = false;
  }
};

// actions
export const actions = {
  async getBloodList({ commit }, bloodGroup) {
    try {
      commit("startLoading");
      commit("setCurrentGroup", bloodGroup);
      const response = await axios.get(
        `${APIBASEURL}/public/blood-list/${bloodGroup}`
      );
      commit("setBloodList", response.data.data);
    } catch (e) {
      commit("stopLoading");
    }
  },
  async getBloodSingle({ commit }, id) {
    try {
      commit("startLoading");
      const response = await axios.get(
        `${APIBASEURL}/public/blood-single/${id}`
      );
      commit("setBloodSingle", response.data.data);
      console.log(response.data.data);
    } catch (e) {
      commit("stopLoading");
    }
  },
  async getBloodListByName({ commit, state }, name) {
    try {
      commit("startLoading");
      const response = await axios.get(
        `${APIBASEURL}/public/blood-list/${
          state.currentBloodGroup
        }?searching=${name}`
      );
      commit("setBloodList", response.data.data);
    } catch (e) {
      commit("stopLoading");
    }
  }
};
