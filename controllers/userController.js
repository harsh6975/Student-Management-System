module.exports.signin = function (req, res) {
  res.render("sign-common", {
    title: "Sign In",
    class1: "animated fadeIn current",
    class2: "",
  });
};

module.exports.signup = function (req, res) {
  res.render("sign-common", {
    title: "Sign Up",
    class2: "animated fadeIn current",
    class1: "",
  });
};
