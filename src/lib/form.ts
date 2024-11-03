export const getDefaultError = () => {
  return {
    fullName: { error: false, message: "", },
    "u-name": { error: false, message: "", },
    email: { error: false, message: "", },
    password: { error: false, message: "", },
    main: { error: false, message: "", },
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
