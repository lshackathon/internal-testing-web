using InternalTestingWeb.Controllers.v1;
using Xunit;

namespace InternalTestingWeb.Tests.Controllers.v1 {
  public class HealthControllerTest
  {
    private HealthController HealthController { get; set; }

    public HealthControllerTest() => HealthController = new HealthController();

    [Fact]
    public void HealthControllerGet()
    {
      var health = HealthController.Get();

      Assert.Equal("Health Status: UP", health);
    }
  }
} 