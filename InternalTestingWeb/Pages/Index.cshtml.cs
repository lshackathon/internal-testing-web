using Atlas.Auth.Services.AuthService;
using Microsoft.Extensions.Logging;
using Themis.Core.Services;
using InternalTestingWeb.Models;

namespace InternalTestingWeb.Pages
{
  public class IndexModel : ExamplePageModel
  {   
    public IndexModel(ILogger<IndexModel> logger, IDesignService designService, IAuthService authHandler)
      : base(logger, designService, authHandler)
    {}
  }
}
