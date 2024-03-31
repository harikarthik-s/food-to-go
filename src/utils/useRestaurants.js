import { API_URL } from "./constants";
import { useEffect } from "react";

import {create} from 'zustand';

const useRestaurants = create((set) => ({
  loading: true,
  error: null,
  data: null,

  fetchRestaurants: async () => {
    try {
      console.log('Fetching restaurants...');
      const response = await fetch(API_URL);
      console.log('Response received:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      console.log(json);
      set({ loading: false, error: null, data: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants });
    } catch (error) {
        console.log('Error fetching restaurants:', error);
      set({ loading: false, error: error, data: null });
    }
  }
}));


export default useRestaurants;

