using System;
using Themis.Core.Models;
using Themis.Core.Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Atlas.Auth.Services.AuthService;
using Atlas.Auth.Models;

namespace InternalTestingWeb.Models
{
  public class ExamplePageModel : CorePageModel
  {
    public ExamplePageModel(ILogger<ExamplePageModel> log, IDesignService designService, IAuthService authHandler)
      : base(log, designService, authHandler)
    {}

    public async Task<bool> Process()
    {
      // Authenticate the user.  Third parameter indicates that anonymous access is not allowed
      var result = await Authenticate(RealmType.User, AuthImpact.Low, false);

      // Authenticate returned false. This means there was not a valid auth token, 
      // so the call to authenticate did a redirect to login. We abort everything on the page now
      if (!result) return false;

      // At this point the attributes RealmJwtBody and RealmJwtBodyString are set on this

      // Get the market (market is the language and coutry such as en-us or fr-ca). 
      // 
      // Input is the accepted markets. Null means we accept all.
      GetMarket(null);

      // At this point this.Market, this.Language, and this.Country are all set

      // Get the brand (brand is typically derived from the signed in user and/or domain name
      //
      // Input is the accepted brands. Null means we accept all.
      GetBrand(null);

      // At this point this.Brand is set

      // Server side code may need resource strings based on the market.  This function can load in resoure 
      // .json files from the file system based on the Language (e.g. en.json), market (e.g. en-ca.json), or both.
      GetStrings("Strings/", true, false);

      // At this point this.LanguageStrings and this.MarketStrings is set

      // At this point this.LanguageStrings and this.MarketStrings are set

      // Set the Title of the web page; this is optional and largely for convenience
      Title = LanguageStrings["TITLE"];

      // Now fetch the design service content data. 
      
      // Input to this is a dictionary
      // of key/value pairs request specific data to process locally (on this server).
      Dictionary<string, string> values = new Dictionary<string, string>();
      values.Add("title", LanguageStrings["TITLE"]);
      if (RealmJwtBody != null)
      {
        values.Add("payload", RealmInfoUserString);
      }

      // Get the design service data; we are doing a member header (vs. internal or providers)
      await GetDesignServiceData("member", values, false);

      // At this point this.DesignServiceData is set

      // As a final step we figure out the scripts we need for the page.
      // This includes the core react script (in this example main.****.js) and
      // another set of translation files (language and market) needed by the client
      // code (e.g. main-fr.*.js and/or main-fr-ca.*.js)      
      GetScripts(null, null, "main", true, true);

      // At this point this.Scripts is set

      // We return the data and let the Razor template render all this goodness into the HTML

      return true;         
    }
  }
}