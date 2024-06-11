import toast from "react-hot-toast";
import { server } from "../store";
import axios from "axios";
import { getAuthToken } from "../../utils/auth";

export const getAllCompany =
  (email = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCompanyRequest' });
      const token = getAuthToken();

      if (!token) {
        throw new Error("User not logged in");
      }

      const { data } = await axios.get(
        `${server}/admin/getallcompany?keyword=${keyword}&email=${email}`, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      dispatch({ type: 'allCompanySuccess', payload: data.comapny });
      toast.success(data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch({
        type: 'allCompanyFail',
        payload: errorMessage,
      });
      toast.error(errorMessage);
    }
  };
  export const deleteCompany = (id) => async (dispatch) => {
    try {
      dispatch({ type: "deleteCompanyRequest" });
      const token = getAuthToken();
  
      const { data } = await axios.delete(`${server}/deletecompany/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(data);
      dispatch({ type: "deleteCompanySuccess", payload: data.message });
      toast.success(data.message)
    } catch (error) {
      console.log(error);
      dispatch({
        type: "deleteCompanyFail",
        payload: error.response.data.message,
      });
    }
};
  
export const deleteCompanyDoc = (CompanyId, DocId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteDocRequest" });
    const token = getAuthToken()
    const { data } = await axios.delete(
      `${server}/deleteCompanyDoc?companyId=${CompanyId}&docsId=${DocId}`,
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
