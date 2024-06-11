import toast from "react-hot-toast";
import { server } from "../store";
import axios from "axios";
import { getAuthToken } from "../../utils/auth";
export const login = (email, password, type) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password, type },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    localStorage.setItem('authToken', data.token); // Store token in localStorage
    setTimeout(() => {
      localStorage.removeItem("resetEmail"); // Remove email from localStorage after 20 minutes
    }, 30 * 60 * 1000);

    dispatch({ type: 'loginSuccess', payload: data });
    console.log(data);
    toast.success(data.message);
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
    toast.error(
      error.response.data.message || 'Login failed. Please try again.'
    );
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch({ type: "loadUserSuccess", payload: data.user });
    console.log(data, "lalalal");
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};


export const logout = () => (dispatch) => {
  try {
    localStorage.removeItem('authToken'); // Clear token from localStorage
    dispatch({ type: 'logoutSuccess' });
    toast.success("Logged Out Successfully");
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.message });
    toast.error("Logout failed. Please try again.");
  }
};

export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: 'getAllUserRequest' });
    
    const token = getAuthToken();
    
    const { data } = await axios.get(`${server}/admin/getallUser`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      withCredentials: true,
    });

    console.log(data);
    dispatch({ type: 'getAllUserSuccess', payload: data.user });
    toast.success(data.message);
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'getAllUserFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteUSer = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const token = getAuthToken();

    const { data } = await axios.delete(`${server}/deleteUser/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    console.log(data);
    dispatch({ type: "deleteUserSuccess", payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};
export const register = (name, email, password, type) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      `${server}/createUser`,
      {
        name,
        email,
        password,
        type,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    localStorage.setItem('authToken', data.token); // Store token in localStorage
    setTimeout(() => {
      localStorage.removeItem("resetEmail"); // Remove email from localStorage after 20 minutes
    }, 20 * 60 * 1000);
    console.log(data);
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const uploadDocs = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "uploadDocsRequest" });
    const token = getAuthToken()
    const { data } = await axios.post(`${server}/admin/uploaddocs`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,

      }    });
    console.log(data);
    dispatch({ type: "uploadDocsSuccess", payload: data.message });
    toast.success(data.message)
  } catch (error) {
    console.log(error);
    dispatch({
      type: "uploadDocsFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteSingleDoc = (UserId, DocId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteDocRequest" });
    const token = getAuthToken()
    const { data } = await axios.delete(
      `${server}/deleteDoc?userId=${UserId}&docsId=${DocId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    );
    console.log(data);
    dispatch({ type: "deleteDocSuccess", payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "deleteDocFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllCompany =
  (email = "", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "getAllCompanyRequest" });
      const token = getAuthToken()
      const { data } = await axios.get(
        `${server}/admin/getallcompany?keyword=${keyword}&email=${email}`, {
          'Authorization': `Bearer ${token}`,

        }
      );
      console.log(data.user);
      dispatch({ type: "getAllCompanySuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "getAllCompanyFail",
        payload: error.response.data.message,
      });
    }
  };

export const deleteSingleDocCompany = (UserId, DocId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCompanyDocRequest" });
    const token = getAuthToken()
    const { data } = await axios.delete(
      `${server}/deleteDoc?userId=${UserId}&docsId=${DocId}`,
      {
        'Authorization': `Bearer ${token}`,
      }
    );
    console.log(data);
    dispatch({ type: "deleteCompanyDocSuccess", payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "deleteCompanyDocFail",
      payload: error.response.data.message,
    });
  }
};

export const forgetpassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPAsswordRequest" });
    const { data } = await axios.post(
      `${server}/forgetpassword`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    dispatch({ type: "ForgetPasswordSuccess", payload: data.message });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ForgetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (email, otp, password, confirmPassowrd) => async (dispatch) => {
    try {
      dispatch({ type: "ResetPAsswordRequest" });
      const { data } = await axios.post(
        `${server}/resetpassword`,
        {
          email,
          otp,
          password,
          confirmPassowrd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      dispatch({ type: "ResetPasswordSuccess", payload: data.message });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "RestPasswordFail",
        payload: error.response.data.message,
      });
    }
  };
export const updateRole = (id) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRoleRequest" });
    const token = getAuthToken()
    const { data } = await axios.put(
      `${server}/role/${id}`,
      {}, {
        'Authorization': `Bearer ${token}`,

      }
   
    );
    dispatch({ type: "updateUserRoleSuccess", payload: data.message });
    console.log("id", id);
  } catch (error) {
    console.log(error);
    dispatch({
      type: "updateUserRoleFail",
      payload: error.response.data.message,
    });
  }
};


export const uploadmyDocs = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "uploadmyDocsRequest" });
    const token = getAuthToken()
    const { data } = await axios.post(`${server}/upload `, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,

      }    });
    console.log(data);
    dispatch({ type: "uploadmyDocsSuccess", payload: data.message });
    toast.success(data.message)
  } catch (error) {
    console.log(error);
    dispatch({
      type: "uploadmyDocsFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteMyDoc = ( DocId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteMyDocRequest" });
    const token = getAuthToken()
    const { data } = await axios.delete(
      `${server}/deletemyDoc?docsId=${DocId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    );
    console.log(data);
    dispatch({ type: "deleteMyDocSuccess", payload: data.message });
    toast.success(data.message)
  } catch (error) {
    console.log(error);
    dispatch({
      type: "deleteMyDocFail",
      payload: error.response.data.message,
    });
    
  }
};
