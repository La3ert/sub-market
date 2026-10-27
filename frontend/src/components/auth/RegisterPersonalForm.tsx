import Input from "../shared/Input.tsx";
import Button from "../shared/Button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useState, type SyntheticEvent } from "react";
import { AuthService } from "../../services/auth.service.ts";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/authSlice.ts";

const UserIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

function RegisterPersonalForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await AuthService.registerPersonal({
        firstName,
        lastName,
        email,
        password,
        source: "register_personal_form",
      });

      await messageApi.success("Personal account created successfully!");

      dispatch(
        setCredentials({
          user: {
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
          },
          token: result.token,
          role: result.user.role,
          rememberMe: false,
        }),
      );

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        await messageApi.error(error.message);
      } else {
        await messageApi.error("Unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={"register-form"} onSubmit={handleRegister}>
      {contextHolder}
      <div className={"register-form__full-name"}>
        <Input
          placeholder={"First Name"}
          icon={UserIcon}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Input
          placeholder={"Last Name"}
          icon={UserIcon}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <Input
        type={"email"}
        placeholder={"Email"}
        icon={EmailIcon}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        icon={LockIcon}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Personal Account"}
      </Button>
      <p className="register-form__login-prompt">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}

export default RegisterPersonalForm;
