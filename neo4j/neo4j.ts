import neo4j from "neo4j-driver";

export const driver = neo4j.driver(
  process.env.NEO4J_URI ?? "bolt://localhost:7687",
  neo4j.auth.basic(process.env.NEO4J_USERNAME ?? "neo4j", process.env.NEO4J_PASSWORD ?? "password")
);