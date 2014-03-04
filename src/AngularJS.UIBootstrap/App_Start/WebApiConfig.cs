using System.Web.Http;

namespace App.AngularJS.UIBootstrap
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
        }
    }
}