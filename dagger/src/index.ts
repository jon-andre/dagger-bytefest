import { dag, Container, Directory, object, func } from "@dagger.io/dagger"
import { v4 as uuidv4 } from 'uuid'

@object()
class HelloDagger {
  
  @func()
  async publish(source: Directory): Promise<string> {
    const myUuid = uuidv4();
    this.test(source)
    return await this.build(source).publish(
      "ttl.sh/" + myUuid + ":1h",
    )
  }

  @func()
  build(source: Directory): Container {
    const build = this.buildEnv(source)
      .withExec(["dotnet", "build", "--configuration", "Release"])
      .directory("./HelloDagger/bin/Release/net8.0")
    return dag
      .container()
      .from("mcr.microsoft.com/dotnet/aspnet:8.0")
      .withDirectory("/HelloDagger", build)
      .withEntrypoint( ["./HelloDagger/HelloDagger"] )
      .withExposedPort(8080)
  }

  @func()
  async test(source: Directory): Promise<string> {
    return this.buildEnv(source)
      .withExec(["dotnet", "test"])
      .stdout()
  }

  @func()
  buildEnv(source: Directory): Container {
    return dag
      .container()
      .from("mcr.microsoft.com/dotnet/sdk:8.0")
      .withDirectory(".", source)
      .withWorkdir(".")
      .withExec(["dotnet", "build"])
  }
}