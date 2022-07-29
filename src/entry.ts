import handleFetch from "./index.js";

const env = {
  CLIENT_ID: process.env.CLIENT_ID as string,
  TOKEN: process.env.TOKEN as string,
  PUBLIC_KEY: process.env.PUBLIC_KEY as string
};

addEventListener("fetch", (event: FetchEvent) => {
  const response = handleFetch(event.request, env, event);

  event.respondWith(response);
});
