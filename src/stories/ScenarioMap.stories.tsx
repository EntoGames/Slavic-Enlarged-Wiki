import * as React from "react";
import type { Story } from "@ladle/react";
import { ScenarioMap } from "../templates/components/ScenarioMap";

const Default: Story = () => (
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <ScenarioMap />
  </div>
);
Default.storyName = "Domyślna";

export { Default };
export default { title: "ScenarioMap" };
