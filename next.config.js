module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://127.0.0.1:8000/:path*", // Redireciona todas as rotas para a API
      },
    ];
  },
};
