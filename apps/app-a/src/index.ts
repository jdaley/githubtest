import { program } from "commander";
import { CommonThing } from "common";

program.argument("[name]", "name of the person").action((name) => {
  console.log(`Hello ${name || new CommonThing().getDefaultName()} from app-a`);
});

program.parse();
