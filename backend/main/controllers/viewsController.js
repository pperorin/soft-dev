exports.getSignUpForm = (req, res) => {
    res.status(200).render('signup', {
        title: 'Log into your account'
    });
};

exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
        title: 'Log into your account'
    });
};