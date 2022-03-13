import { performance } from "perf_hooks";

import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";

const iterations = 100;

const startUUID = performance.now();
for (let i = 0; i < iterations; i++) {
  const id = uuidv4();
}
const endUUID = performance.now();

const startNanoID = performance.now();
for (let i = 0; i < iterations; i++) {
  const id = nanoid();
}
const endNanoID = performance.now();

const timeUUID = endUUID - startUUID;
const timeNanoID = endNanoID - startNanoID;
console.log(`Time for ${iterations} UUIDs ${timeUUID}ms (${timeUUID / iterations}ms per ID)`);
console.log(`Time for ${iterations} NanoIDs ${timeNanoID}ms (${timeNanoID / iterations} per ID)`);
