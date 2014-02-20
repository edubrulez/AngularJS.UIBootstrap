using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(App.AngularJS.UIBootstrap.Startup))]

namespace App.AngularJS.UIBootstrap
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
