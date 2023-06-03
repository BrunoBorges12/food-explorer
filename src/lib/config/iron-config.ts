export const ironOptions = {
  cookieName: "MY_APP_COOKIE",
  password: process.env.IRON,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};
