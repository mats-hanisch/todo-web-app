import path from "node:path";
import { fileURLToPath } from 'url';

import Htmlrl from 'htmlrl';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const htmlrl = new Htmlrl({
    rootDir: path.resolve(__dirname, "..", "..", "views")
});


export default htmlrl;
