import axios from 'axios'

export const axiosInstance = axios.create({ // For Transaction, Location
  baseURL: 'https://671f1b7a1dfc42991983f6dc.mockapi.io/api/v1', 
  headers: {
    'Content-type': 'application/json'
  }
})

export const axiosInstance2 = axios.create({ // For Inventory
  baseURL: 'https://673be39a96b8dcd5f3f7c922.mockapi.io',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const axiosInstance3 = axios.create({ // For Supplier
  baseURL: 'https://674a78858680202966349258.mockapi.io',
  headers: {
    'Content-Type': 'application/json'
  }
})