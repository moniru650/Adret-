
const localApi='localhost:4500';
const server="production";
let baseURL = localApi;
if(server==="production"){
    baseURL="https://adret-backend.vercel.app";
}

export default baseURL;