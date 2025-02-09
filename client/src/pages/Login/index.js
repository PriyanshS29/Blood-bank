// import {Button ,Form , Input, Radio, message} from "antd";
// import React from 'react'
// import{Link, useNavigate} from "react-router-dom";
// import { LoginUser } from "../../apicalls/users";
// import  { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { SetLoading } from "../../redux/loadersSlice";
// import { getAntdInputValidation } from "../../utils/helpers";




// function Logins() {
//   const [type, setType] = React.useState('donor');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onFinish = async (values) =>{
//     try{
//       dispatch(SetLoading(true))
//       const response = await LoginUser({
//         ...values,
//         userType: type,
//     });
//       dispatch(SetLoading(false))
//       if(response.success){
//         message.success(response.message);
//         localStorage.setItem("token",response.data);
//         navigate("/")

//       }else{
//         throw new Error(response.message);
//       }
//     } catch(error){
//       dispatch(SetLoading(false));
//       message.error(error.message);
//     }
//   };



//   useEffect(() => {
//     if(localStorage.getItem("token")){
//       navigate("/")
//     }
//   }, [])
//   return (
//     <div className = "flex h-screen items-center justify-center bg-primary">
//       <Form
//        layout = "vertical"
//         className = "bg-white rounded shadow grid grid-cols-2 p-5 gap-5  w-1/2"
//         onFinish = {onFinish}
        
        
        
//         >
//           <h1 className = "col-span-2 uppercase text - 2xl">
//             <span className = "text-primary">
//               {type.toUpperCase()}- LOGIN
              
//             </span>
//             <hr/>
//           </h1>
//           <Radio.Group onChange={(e)=> setType(e.target.value)} value = {type}
//           className="col-span-2">
//             <Radio value="donor">Donor</Radio>
//             <Radio value="hospital">Hospital</Radio>
//             <Radio value="organization">Organization</Radio>
//           </Radio.Group>

         
        
//       <Form.Item label = "Email" name = 'email' rules ={getAntdInputValidation()}
      
//       >
//         <Input />
//       </Form.Item>
      
//       <Form.Item label = "Password" name = 'password'  rules ={getAntdInputValidation()}>
//         <Input
//         type = 'password' 
//         />
//       </Form.Item>

          
      
    
//        <Button type="primary" block className="col-span-2"
//        htmlType="submit">
//        Login
//        </Button>
//        <Link to="/register" className="col-span-2 text-center text-gray-700 underline">
//        Don't have an account? Register
//        </Link>
//       </Form>
//     </div>
//   )
// }

// export default Logins


import { Button, Form, Input, Radio, message } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { SetLoading } from "../../redux/loadersSlice";
import { getAntdInputValidation } from "../../utils/helpers";

function Login() {
  const [type, setType] = React.useState("donar");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(SetLoading(true));
      const response = await LoginUser({
        ...values,
        userType: type,
      });
      dispatch(SetLoading(false));
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid p-5 gap-5 w-1/3"
        onFinish={onFinish}
      >
        <h1 className=" uppercase text-2xl">
          <span className="text-primary">{type.toUpperCase()} - LOGIN</span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          className=""
        >
          <Radio value="donar">Donor</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        <Form.Item label="Email" name="email" rules={getAntdInputValidation()}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={getAntdInputValidation()}
        >
          <Input type="password" />
        </Form.Item>

        <Button type="primary" block className="" htmlType="submit">
          Login
        </Button>

        <Link to="/register" className=" text-center text-gray-700 underline">
          Don't have an account ? Register
        </Link>
      </Form>
    </div>
  );
}

export default Login;


// import { Button, Form, Input, Radio, message } from "antd";
// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { LoginUser } from "../../apicalls/users";
// import { useDispatch } from "react-redux";
// import { SetLoading } from "../../redux/loadersSlice";
// import { getAntdInputValidation } from "../../utils/helpers";
// import Lottie from "react-lottie";
// import animationData from "../../assets/login-animation.json"; // Example Lottie animation for login

// function Login() {
//   const [type, setType] = React.useState("donar");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onFinish = async (values) => {
//     try {
//       dispatch(SetLoading(true));
//       const response = await LoginUser({
//         ...values,
//         userType: type,
//       });
//       dispatch(SetLoading(false));
//       if (response.success) {
//         message.success(response.message);
//         localStorage.setItem("token", response.data);
//         navigate("/");
//       } else {
//         throw new Error(response.message);
//       }
//     } catch (error) {
//       dispatch(SetLoading(false));
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       navigate("/");
//     }
//   }, []);

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Lottie Animation */}
//         <div className="hidden lg:block">
//           <Lottie options={defaultOptions} height={400} width={400} />
//         </div>

//         {/* Login Form */}
//         <div className="p-10">
//           <Form
//             layout="vertical"
//             className="grid gap-5"
//             onFinish={onFinish}
//           >
//             <h1 className="uppercase text-2xl font-bold text-center text-primary">
//               <span className="text-gray-700">{type.toUpperCase()} - LOGIN</span>
//               <hr className="border-primary mt-2" />
//             </h1>

//             {/* User Type Selector */}
//             <Radio.Group
//               onChange={(e) => setType(e.target.value)}
//               value={type}
//               className="flex justify-center gap-5"
//             >
//               <Radio value="donar">Donor</Radio>
//               <Radio value="hospital">Hospital</Radio>
//               <Radio value="organization">Organization</Radio>
//             </Radio.Group>

//             {/* Form Fields */}
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={getAntdInputValidation()}
//             >
//               <Input placeholder="Enter your email" />
//             </Form.Item>

//             <Form.Item
//               label="Password"
//               name="password"
//               rules={getAntdInputValidation()}
//             >
//               <Input.Password placeholder="Enter your password" />
//             </Form.Item>

//             {/* Login Button */}
//             <Button
//               type="primary"
//               block
//               className="transition-transform hover:scale-105"
//               htmlType="submit"
//             >
//               Login
//             </Button>

//             {/* Register Link */}
//             <Link
//               to="/register"
//               className="text-center text-gray-500 hover:text-primary underline"
//             >
//               Don't have an account? Register
//             </Link>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
