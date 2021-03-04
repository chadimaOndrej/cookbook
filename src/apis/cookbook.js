import axios from 'axios';

export default axios.create({
    baseURL: "https://cookbook.ack.ee/api/v1",
    params: {
    }
});
