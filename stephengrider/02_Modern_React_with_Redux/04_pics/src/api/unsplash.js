import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 8quOCAIdQ_eKFK2birwrZPGkS6OhENyuMh6dnuhqTIY',
  },
});
