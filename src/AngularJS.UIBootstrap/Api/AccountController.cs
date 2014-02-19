using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;
using App.AngularJS.UIBootstrap.Models;

namespace App.AngularJS.UIBootstrap.Api
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public HttpResponseMessage Login(User user)
        {
            if (!this.ModelState.IsValid) return this.Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);

            //TODO: replace with actual authentication mechanism
            var authenticated = (user.UserName == "user" && user.Password == "pass");

            if (!authenticated) return this.Request.CreateResponse(HttpStatusCode.Unauthorized);

            var response = this.Request.CreateResponse(HttpStatusCode.OK, true);
            FormsAuthentication.SetAuthCookie(user.UserName, false);
            return response;
        }

        [Route("logout")]
        [HttpPost]
        public HttpResponseMessage Logout(User user)
        {
            if (!this.ModelState.IsValid) return this.Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);

            var response = this.Request.CreateResponse(HttpStatusCode.OK, true);
            FormsAuthentication.SignOut();
            return response;
        }
    }
}
