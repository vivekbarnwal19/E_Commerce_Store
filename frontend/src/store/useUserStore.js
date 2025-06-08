/* eslint-disable no-unused-vars */
import { create } from "zustand";
import axios from "../lib/axios";
import {toast} from "react-hot-toast";

export const useUserStore = create((set , get) => ({
    user:null,
    loading: false,
    checkingAuth: true,

    //signup
    signup: async ({ name, email,password, confirmPassword }) => {
        set({ loading: true });

        if(password !== confirmPassword){
            set({ loading: false });
            return toast.error("Password do not match with each other");
        }

        try {
            const res = await axios.post("/auth/signup", {name, email, password})
            set({ user: res.data, loading: false});

        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.message || "An Error occured ");
        }
    },

    //login
    login: async (email, password) => {
        set({ loading: true });

        try {
            const res = await axios.post("/auth/login", {email, password})
            set({ user: res.data, loading: false});

        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.message || "An Error occured ");
        }
    },

    //logout
    logout: async () =>{
        try {
            await axios.post("/auth/logout");
            set({ user: null})
        } catch (error) {
            toast.error(error.response?.data?.message || "An Error occured during logout")
        }

    },

    //checkAuth
    checkAuth: async () =>{
        set({ checkingAuth: true });
        try {
            const response = await axios.get("/auth/profile");
            set({ user: response.data, checkingAuth: false})
        } catch (error) {
            set({ checkingAuth: false , user: null})
        }
    }

    
}));

// TODO Implement the axios interceptors for refreshing access token from 15 m 