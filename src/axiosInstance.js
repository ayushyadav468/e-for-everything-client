import axios from 'axios';

const port = process.env.PORT || 8000;

const configs = {
	development: {
		SERVER_URI: `http://localhost:${port}`
	},
	production: {
		SERVER_URI: 'https://e-for-everything-server.vercel.app/'
	}
};

const instance = axios.create({
	baseURL: 'https://e-for-everything-server.vercel.app/'
});

export default instance;
