using System;
using Microsoft.AspNetCore.Mvc;

namespace InternalTestingWeb.Controllers.v1
{
  [Route("v1/health")]
  [ApiController]
  public class HealthController : ControllerBase
  {
    [HttpGet]
    public String Get() => "Health Status: UP";
  }
}