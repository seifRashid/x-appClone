import { defineStore } from 'pinia';
// import data from '@/data.js';

export const useContent = defineStore('content', {
  // states
  state: () => ({
    data: [],
    total: 0,
    showSideBar: false
  }),

  // actions
  actions: {
    async fetchData() {
      try {
        // Fetch data from the imported JSON file
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        this.data = result;
      } catch (error) {
        console.error('Error fetching data yangu:', error);
      }
    },
    toggleSideBar() {
      this.showSideBar = !this.showSideBar;
      }
  }
});

