export interface RegisterPersonalData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  source: string;
}

export interface RegisterBusinessData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companyWebsite?: string;
  source: string;
}

export interface loginData {
  email: string;
  password: string;
}

export interface forgotPasswordData {
  email: string;
  source: string;
}

export const AuthService = {
  registerPersonal: async (data: RegisterPersonalData) => {
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = Array.isArray(result.message)
          ? result.message.join(", ")
          : result.message || "Something went wrong during registration";

        throw new Error(errorMessage);
      }

      return result;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Registration error:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
      throw error;
    }
  },

  registerBusiness: async (data: RegisterBusinessData) => {
    const response = await fetch(
      "http://localhost:3000/auth/register/business",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Something went wrong during register",
      );
    }

    return response.json();
  },

  login: async (data: loginData) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong during login");
    }

    return response.json();
  },

  forgotPassword: async (data: forgotPasswordData) => {
    const response = await fetch("http://localhost:3000/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Something went wrong. Please try again later",
      );
    }

    return response.json();
  },

  getMe: async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!token) throw new Error("No token found");

    const response = await fetch("http://localhost:3000/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }

      throw new Error("NetworkError");
    }

    return response.json();
  },
};
