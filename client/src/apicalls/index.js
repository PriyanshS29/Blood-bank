// import axios from "axios";

// export const axiosInstance = async (method, endpoint, payload) => {
//   try {
//     const response = await axios({
//       method,
//       url: endpoint,
//       data: payload,

//       headers: {
//         authorization: `Bearer ${localStorage.getItem("token")}`
//       },
      
//     },
  

//   );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

import axios from "axios";

export const axiosInstance = async (method, endpoint, payload) => {
  try {
    const response = await axios({
      method,
      url: `https://blood-bank-pmjc.onrender.com${endpoint}`,
      data: payload,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
