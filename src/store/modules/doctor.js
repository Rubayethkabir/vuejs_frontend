import axios from "axios";

const APIBASEURL = "https://jim.pakundia.me/api";

// state
export const state = {
  doctorList: null,
  doctorSingle: null,
  loading: false,
  currentdoctorGroup: null
};

// getters
export const getters = {
  doctorList: state => state.doctorList,
  doctorSingle: state => state.doctorSingle,
  loading: state => state.loading
};

// mutations
export const mutations = {
  setdoctorList(state, payload) {
    state.loading = false;
    state.doctorList = payload;
  },
  setdoctorSingle(state, payload) {
    state.loading = false;
    state.doctorSingle = payload;
  },

  startLoading(state) {
    state.loading = true;
  },

  setCurrentGroup(state, payload) {
    state.currentdoctorGroup = payload;
  },
  stopLoading(state) {
    state.loading = false;
  }
};

// actions
export const actions = {
  async getdoctorList({ commit }, doctorGroup) {
    try {
      commit("startLoading");
      commit("setCurrentGroup", doctorGroup);
      const response = await axios.get(
        `${APIBASEURL}/public/doctor-list/${doctorGroup}`
      );
      commit("setdoctorList", response.data.data);
    } catch (e) {
      commit("stopLoading");
    }
  },
  async getdoctorSingle({ commit }, id) {
    try {
      commit("startLoading");
      const response = await axios.get(
        `${APIBASEURL}/public/doctor-single/${id}`
      );
      commit("setdoctorSingle", response.data.data);
      console.log(response.data.data);
    } catch (e) {
      commit("stopLoading");
    }
  },
  async getdoctorListByName({ commit, state }, name) {
    try {
      commit("startLoading");
      const response = await axios.get(
        `${APIBASEURL}/public/doctor-list/${
          state.currentdoctorGroup
        }?searching=${name}`
      );
      commit("setdoctorList", response.data.data);
    } catch (e) {
      commit("stopLoading");
    }
  }
};
