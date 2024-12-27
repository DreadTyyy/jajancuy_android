const BASE_URL = "https://auth.jajancuy.aderifkysetiawan.site";

const register = async ({
  firstName,
  lastName,
  email,
  password,
  password2,
}) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: password2,
      }),
    });
    const statusCode = response.status;
    const responseJson = await response.json();
    console.log(responseJson);

    if (statusCode === 201) {
      return { error: false, message: responseJson.message };
    }
    return { error: true, message: `Registration failed!` };
  } catch (error) {
    return { error: true, message: "An error occured during registration" };
  }
};
const login = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({ email, password }),
    });
    const statusCode = response.status;
    const responseJson = await response.json();

    if (statusCode === 200) {
      return {
        error: false,
        message: responseJson.message,
        tokenAccess: responseJson.TokenAccess,
      };
    }
    return { error: true, message: `Failed: ${responseJson.non_field_errors}` };
  } catch (error) {
    return { error: true, message: "An error occured during registration" };
  }
};

const forgotPassword = async ({ email }) => {
  try {
    const response = await fetch(`${BASE_URL}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({ email }),
    });
    const statusCode = response.status;
    const responseJson = await response.json();
    console.log(responseJson);

    if (statusCode === 200) {
      return { error: false, message: responseJson.message };
    }
    return { error: true, message: responseJson.email[0] };
  } catch (error) {
    return { error: true, message: "An error occured during registration" };
  }
};

export { register, login, forgotPassword };
