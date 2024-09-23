export type LoginResponse = {
  name: String;
  email: String;
  role: "ADMIN" | "MANAGER" | "USER";
  access_token: string;
};
