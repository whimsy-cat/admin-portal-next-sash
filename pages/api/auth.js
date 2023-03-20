// Set the base URL for all API requests
const API_BASE_URL = process.env.DEV_HOST;

// Function to login and get JWT token and admin search token
export const admin_login = async (email, password) => {
  var formdata = new FormData();
  formdata.append("email", email);
  formdata.append("password", password);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      API_BASE_URL + "auth/admin_login",
      requestOptions
    );
    const result = await response.json();
    localStorage.setItem("jwt", result.token);
    localStorage.setItem("admin_search_token", result.admin_search_token);

    // Unauthorized
    if (response.status == 401)
      return { success: false, message: "Unauthorized", result };
    else if (response.status == 422)
      return { success: false, message: "The given data was invalid", result };
    else return { success: true, message: "Login success", result };
  } catch (err) {
    console.log(err);
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { success: false, message };
  }
};

// Fuction to reset email
export const send_reset_email = async (email, for_admin) => {
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  const url = API_BASE_URL + "auth/send";
  const params = {
    email: email,
    for_admin: for_admin,
  };

  const queryString = new URLSearchParams(params).toString();
  try {
    const response = await fetch(`${url}?${queryString}`, requestOptions);
    const result = await response.json();
    if (response.status == 422) {
      return { success: false, message: "The given data was invalid", result };
    } else
      return {
        success: true,
        message: "We have emailed your password reset link!",
        result,
      };
  } catch (error) {
    console.log(err);
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { success: false, message };
  }
};

// Fuction to reset password
export const reset_password = async (
  token,
  email,
  password,
  password_confirmation
) => {
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  const url = API_BASE_URL + "auth/reset";
  const params = {
    token: token,
    email: email,
    password: password,
    password_confirmation: password_confirmation,
  };

  const queryString = new URLSearchParams(params).toString();
  try {
    const response = await fetch(`${url}?${queryString}`, requestOptions);
    const result = await response.json();
    if (response.status == 422) {
      return { success: false, message: "The given data was invalid", result };
    } else if (result.message == "This password reset token is invalid.") {
      return {
        success: false,
        message: "This password reset token is invalid.",
        result,
      };
    } else
      return {
        success: true,
        message: "Your password has been reset!",
        result,
      };
  } catch (error) {
    console.log(err);
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { success: false, message };
  }
};

// Fuction to get user profile
export const current_user = async () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODk2NWQ4YTNmNjg3ODI5MzBlNGNlYWNlNjFjMzc3MDA4NDMxNmY4ZTIxZmYwMThlZGI0NDA0Yjc3Mzc0MzE5MjI2Yjc3NTgzMTA3YzFjZWUiLCJpYXQiOjE2NzkyNzcxNTAuMTMyNzgzLCJuYmYiOjE2NzkyNzcxNTAuMTMyNzksImV4cCI6MTcxMDg5OTU1MC4xMjY4NzMsInN1YiI6IjkiLCJzY29wZXMiOlsiYWRtaW4tYWN0aW9ucyJdfQ.nRSqbBPesbGDB8iyB0xqdgXYUtryTjSzvprT42vHRBzP-EBTR59wAd28uvkeNQz3ZWnPY5mvvWiUXkDIUzcklRLpZ31KiLgE_-6AeA0_b8vrbVGCS4yBskgzTjLYukkXPO01KIirae5aHVnAP_alUk8aco4JhCoiif5uwaABKd4gk35xHDLd6yjgOqL81Lq7f3ibPktNcMDNRMXQ76oSnCMNDUvkWnzdTHYCbzAwKJSOuX3wOG5C9shRHL9SJNSrFOGo4jrePNjdwM8sM3BmWqqRuDOKjOqb8ZLbDLLn80s81A37CPjlGDzIo-FjaLXxF-LcOeUdCuPvV_lpjQ9MlCY4RByIs4FwdpIW7jHFhbBbrhLZ0l1V9cu6eFC_thJhHBFxjQKyc-C9kn2GRdAnmSbQbRjrNPXozP_vQCqZk73y7PGNna75ogwV799bMsf4L4UkOuLgAa8S5vWVudtxjr5XY7bTyqZBDM-QiJdjIe8rC7CW3-ALDFbY6E9ypYH1aXuX2dD1biEuadnqJfH_-wm_ZEGA62TQEn82UA3uRUc2xuVMM--cmMLpJx4gccf4J-vmAjMZBZSSHefhrTy3bNfTkYP0ADkl2d3NMcuh_vyjVHYVpvkf9e2wuSRSXovTeRvnTuj2DhhbY2r3nZGxJV0M_0gErWSTksPTQEspPbw"
  );
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  try {
    const response = await fetch(API_BASE_URL + "auth/user", requestOptions);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { success: false, message };
  }
};
