import Input from "../shared/Input.tsx";
import Button from "../shared/Button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { type SyntheticEvent, useState } from "react";
import { AuthService } from "../../services/auth.service.ts";
import { message } from "antd";

const UrlIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const CompanyIcon = (
  <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"
    ></path>
  </svg>
);

function RegisterBusinessForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleRegisterBusiness = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      companyName,
      ...(companyWebsite && { companyWebsite }),
      firstName,
      lastName,
      email,
      source: "register_business_form",
    };

    try {
      const result = await AuthService.registerBusiness(formData);

      await messageApi.success(
        result.message || "Application submitted successfully!",
        5,
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
    <form className={"register-form"} onSubmit={handleRegisterBusiness}>
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
        placeholder={"Business Email"}
        icon={EmailIcon}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        placeholder={"Company Name"}
        icon={CompanyIcon}
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />

      <Input
        type={"url"}
        placeholder={"Company Website (Optional)"}
        icon={UrlIcon}
        value={companyWebsite}
        onChange={(e) => setCompanyWebsite(e.target.value)}
      />

      <Button type={"submit"} disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Application"}
      </Button>

      <p className="register-form__login-prompt">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}

export default RegisterBusinessForm;
