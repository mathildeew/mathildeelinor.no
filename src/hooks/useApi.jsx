import axios from "axios";
import { useState } from "react";
/**
 * Custom React Hook for making API requests using Axios.
 *
 * @returns {{
 *   fetchApi: function(string, string, object): Promise<*>,
 *   data: any[],
 *   isLoading: boolean,
 *   isSuccess: boolean | null,
 *   isError: boolean,
 *   errorMsg: string | null
 * }}
 */
export default function useApi() {
  const token = window.localStorage.getItem("token");

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMessage] = useState(null);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  /**
   * Function for making API requests using Axios.
   *
   * @param {string} url - The URL of the API endpoint.
   * @param {string} method - The HTTP method for the request (e.g., "GET", "POST").
   * @param {object} data - The data to send with the request (request body).
   * @returns {Promise<ApiResponse|null>} A Promise that resolves to the API response if successful, or null if an error occurs.
   */
  async function fetchApi(url, method, data) {
    setIsLoading(true);

    try {
      const response = await axios({
        url: url,
        method: method,
        headers: headers,
        data: data,
      });
      setData(response.data);
      setIsSuccess(true);
      setIsError(false);
      setErrorMessage(null);

      return response;
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setIsError(true);
      setIsSuccess(false);
      setData([]);

      return { status: error.response?.status, data: null, error: errorMsg };
    } finally {
      setIsLoading(false);
    }
  }

  return {
    fetchApi,
    data,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
  };
}
