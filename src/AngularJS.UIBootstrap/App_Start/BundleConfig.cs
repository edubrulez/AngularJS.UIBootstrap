// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2014 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.AngularJS.UIBootstrap
{
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css"));

            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/js/bootstrap").Include(
                "~/scripts/ui-bootstrap-{version}.js",
                "~/scripts/ui-bootstrap-tpls-{version}.js"));

            bundles.Add(new ScriptBundle("~/js/angular").Include(
                "~/scripts/angular.js",
                "~/scripts/angular-mocks.js",
                "~/scripts/AngularUI/ui-router.js"));

            bundles.Add(new ScriptBundle("~/js/app").IncludeDirectory("~/scripts/app", "*.js", true));

            bundles.Add(new ScriptBundle("~/js/jasmine").Include(
                "~/scripts/jasmine/jasmine.js",
                "~/scripts/jasmine/jasmine-html.js"));

            bundles.Add(new ScriptBundle("~/js/tests").IncludeDirectory("~/scripts/tests", "*.js", true));
        }
    }
}
