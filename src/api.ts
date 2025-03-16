import { Match } from "./types"

const BASE_URL = "https://app.ftoyd.com/fronttemp-service"

type ResponseBody = {
    data: {
        matches: Match[],
    }
    ok: boolean,
}

export const getMatches = async (): Promise<Match[]> => {
    const response = await fetch(`${BASE_URL}/fronttemp`);
    const responseBody: ResponseBody = await response.json();
    if (!responseBody.ok) throw new Error();

    return responseBody.data.matches;
}
