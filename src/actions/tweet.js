export const TWEET = 'TWEET';
export const tweet = (quote) => {
    return {
        type: TWEET,
        payload: quote,
    }
}