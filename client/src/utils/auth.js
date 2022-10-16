
export default {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    return req;
  },
  
  login: function (token) {
    window.localStorage.setItem("token", token);
  },
  loggedIn: function () {
    return !!window.localStorage.getItem("token");
  },
  logout: function () {
    window.localStorage.setItem("token", "");
    window.location = "/";
  },
};
