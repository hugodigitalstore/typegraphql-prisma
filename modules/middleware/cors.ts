import Cors from "cors";
import initMiddleware from "./initMiddleware";


var corsUrl: string = process.env.NEXT_PUBLIC_APOLLO_URL || "https://studio.apollographql.com";
const cors = initMiddleware(
    Cors({
        credentials: true,
        origin: [corsUrl],
    })
);

export { cors };