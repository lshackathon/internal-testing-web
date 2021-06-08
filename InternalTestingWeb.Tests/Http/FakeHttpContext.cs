using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Security.Claims;
using System.Threading;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;

namespace InternalTestingWeb.Tests.Http {
  public class FakeHttpContext : HttpContext
    {
    public FakeHttpContext() {

    }
    public FakeHttpContext(IFeatureCollection features) {
      Features = features;
    }

    public override string TraceIdentifier { get; set; }
    public override ISession Session { get; set; }
    public IServiceScopeFactory ServiceScopeFactory { get; set; }
    public override HttpResponse Response { get; }
    public override IServiceProvider RequestServices { get; set; }
    public override CancellationToken RequestAborted { get; set; }
    public override HttpRequest Request { get; }
    public override IDictionary<object, object> Items { get; set; }
    [EditorBrowsable(EditorBrowsableState.Never)]
    public HttpContext HttpContext { get; }
    public FormOptions FormOptions { get; set; }
    public override IFeatureCollection Features { get; }
    public override ConnectionInfo Connection { get; }
    public override ClaimsPrincipal User { get; set; }
    public override WebSocketManager WebSockets { get; }

    public override void Abort() {}
    public void Initialize(IFeatureCollection features) {}
    public void Uninitialize() {}
  }
}
