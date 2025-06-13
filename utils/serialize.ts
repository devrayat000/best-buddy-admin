import { Node } from "slate";
import type { Prisma } from "@prisma/client";

export default function serialize(nodes: Prisma.JsonValue) {
  if (Array.isArray(nodes)) {
    return nodes.map((n) => Node.string(n as any)).join("\n");
  }
  if (typeof nodes === "object" && nodes !== null) {
    return Node.string(nodes as any);
  }
  if (typeof nodes === "string") {
    return nodes;
  }
  throw new Error("Invalid nodes format");
}
