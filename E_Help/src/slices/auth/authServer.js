import axios from "axios";

const api_url="http://localhost:8000/v1/front/auth/"
// Register user

const Register=async(userData)=>{
console.log(userData);
const response =await axios.post(api_url + "register",userData)
return response.formdata
}
// Login User
const login=async(userData)=>{
const response=await axios.post(api_url+"login",userData)
console.log(userData);
if (response.data)
{
    localStorage.setItem("user",JSON.stringify(response.data))
    const getdata = localStorage.getItem("user");
    console.log("getdata",getdata)
    console.log("response.data",response.data)
}    
return response.data
}
const contact=async(contactData)=>{
    console.log(contactData);
const response=await axios.post(api_url+"contact",contactData)
return response.contactData
}
const question=async(questionData)=>{
    console.log(questionData);
    const response=await axios.post(api_url+"question",questionData)
    return response.questionData
}
const authservice={
    Register,
    login,
    contact,
    question
}
export default authservice;