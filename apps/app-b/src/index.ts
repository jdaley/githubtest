import { CommonThing } from "common";

try {
  new CommonThing().throwAnError();
} catch (err) {
  console.log(err);
}
