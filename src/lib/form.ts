export const getDefaultError = () => {
  return {
    fullName: { error: false, message: "", data: ""},
    "u-name": { error: false, message: "", data: ""},
    email: { error: false, message: "", data: ""},
    password: { error: false, message: "", data: ""},
    otp: { error: false, message: "", data: ""},
    main: { error: false, message: "", data: ""},
  };
};

export const inputs: {
  id: "fullName" | "u-name" | "email" | "password" | "main";
  placeholder: string;
  type: string;
  label: string;
}[] = [

  { id: "fullName", placeholder: "John dev", type: "text", label: "Full Name" },
  { id: "u-name", placeholder: "@john", type: "text", label: "User Name" },
  { id: "email", placeholder: "john@ex.com", type: "email", label: "Email" },
  { id: "password", placeholder: "••••••••", type: "password", label: "Password" },
];
