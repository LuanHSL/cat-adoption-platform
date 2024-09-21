import axios from 'axios';

axios.defaults.baseURL = import.meta.env.API_BASE || 'http://localhost:3000/api';

axios.headers = {
  'Content-Type': 'application/json',
}

export default axios;

// import '@/interceptors';