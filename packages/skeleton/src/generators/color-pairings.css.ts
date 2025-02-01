import { writeFileSync } from "node:fs";
import {COLORS} from "./colors.js";

writeFileSync('./generated/color-pairings.css', `/* ${COLORS.join(', ')} */`);
