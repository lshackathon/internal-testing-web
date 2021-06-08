using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace InternalTestingWeb.Tests.Http
{
  public class FakeHttpRequest : HttpRequest
  {
    public override IHeaderDictionary Headers { get; }

    public bool HasStarted { get; }

    public override bool HasFormContentType { get; }

    public override string Method { get; set; }

    public override IFormCollection Form { get; set; }

    public override Stream Body { get; set; }

    public override IQueryCollection Query { get; set; }

    public override HttpContext HttpContext { get; }

    public override PathString PathBase { get; set; }

    public override HostString Host { get; set; }

    public override string ContentType { get; set; }

    public override string Scheme { get; set; }

    public override string Protocol { get; set ; }

    public override bool IsHttps { get; set; }

    public override IRequestCookieCollection Cookies { get; set; }

    public override PathString Path { get; set; }

    public override QueryString QueryString { get; set; }

    public override long? ContentLength { get; set; }

    public override Task<IFormCollection> ReadFormAsync(CancellationToken cancellationToken = default)
    {
      throw new NotImplementedException();
    }
  }
}