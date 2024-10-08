import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE || '/api';

axios.headers = {
  'Content-Type': 'application/json',
}

export default axios;

// import '@/interceptors';