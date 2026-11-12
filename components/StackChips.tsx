import { Chip } from "./Chip";
import type { StackGroup } from "@/data/types";

export function StackChips({ groups }: { groups: StackGroup[] }) {
  return (
    <div>
      {groups.map((g) => (
        <div key={g.group} style={{ marginBottom: "22px" }}>
          <h4
            style={{
              margin: "0 0 12px",
              font: "400 12px var(--mono)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--mut)",
            }}
          >
            {g.group}
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {g.items.map((item) => (
              <Chip key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
