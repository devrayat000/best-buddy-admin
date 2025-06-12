import { Node } from "slate";

export default function serialize(content: string) {
  const nodes = JSON.parse(content) as Node[];
  return nodes.map((n) => Node.string(n)).join("\n");
}
