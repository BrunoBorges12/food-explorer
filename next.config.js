module.exports = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/api/login",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};
