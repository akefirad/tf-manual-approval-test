import { App, TerraformStack } from "cdktf";
import { RandomProvider } from "@cdktf/provider-random/lib/provider";
import { StringResource } from "@cdktf/provider-random/lib/string-resource";
import { Construct } from "constructs";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define resources here
    new RandomProvider(this, "random", {
      alias: "random",
    });

    new StringResource(this, "random-string", {
      length: 10,
      special: false,
      upper: true,
    });

  }
}

const app = new App();
new MyStack(app, "tf-manual-approval-test");
app.synth();
