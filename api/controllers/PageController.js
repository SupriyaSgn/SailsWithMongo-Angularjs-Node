/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	showHomePage: function (req, res) {

    // If not logged in, show the public view.
    if (!req.session.me) {
      return res.view('homepage');
    }

    // Otherwise, look up the logged-in user and show the logged-in view,
    // bootstrapping basic user data in the HTML sent from the server
    User.findOne(req.session.me, function (err, user){
      if (err) {
        return res.negotiate(err);
      }

      if (!user) {
        sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
        return res.view('homepage');
      }

      return res.view('user/dashboard', {

        me: {
          id: user.id,
          userID:user.userID,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          title: user.title,
          isAdmin: !!user.admin,
          gravatarUrl: user.gravatarUrl
        },
       layout : false
      });

    });
  },

  showSignup: function(req, res, next){

    return res.view(
      'user/signup',{
      layout : false
       }
    );
  },

};

