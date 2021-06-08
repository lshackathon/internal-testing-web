using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Atlas.Auth.Services.AuthService;
using Microsoft.Extensions.Logging;
using Themis.Core.Models;
using Themis.Core.Services;

namespace InternalTestingWeb.Pages
{
  public class ErrorModel : CorePageModel
  {

    public ErrorModel(ILogger<IndexModel> logger, IDesignService designService, IAuthService authHandler) : base(logger, designService, authHandler)
    {
    }

    public async Task<bool> Process()
    {      
      // This is a more simple form of the Process function in index.cshtml.cs.
      //
      // It doesn't require authentication; and doesn't have any javascript to process.

      // Get the market and brand.    
      this.GetMarket(null);
      this.GetBrand(null);

      // Load in resource strings needed by this application in code
      this.GetStrings("Strings/", true, false);

      // Set the title
      this.Title = this.LanguageStrings["ERROR_TITLE"];

      // Get the design service data; for the error page we get the bare header
      Dictionary<string, string> values = new Dictionary<string, string>();
      values.Add("title", this.LanguageStrings["ERROR_TITLE"]);
      await this.GetDesignServiceData("bare", values, false);

      return true;
    }    
  }
}