import { ogm } from "./ogm";
import { generate } from "@neo4j/graphql-ogm";
import { join } from "path";


async function main() {
  await ogm.init();
  const outFile = join(__dirname, './ogm/types/ogm-types.ts');
  try {
    await generate({
      ogm,
      outFile,
    });
    console.log('✨ Types generated successfully!');
  } catch (error) {
    console.error('Error generating types:', error);
    process.exit(1);
  }
}

main();