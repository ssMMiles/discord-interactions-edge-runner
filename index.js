import server from "discord-edge-runner";
import "dotenv/config";

const env = {
  CLIENT_ID: process.env.CLIENT_ID,
  TOKEN: process.env.TOKEN,
  PUBLIC_KEY: process.env.PUBLIC_KEY
};

export default async function main() {
  console.log('Starting edge runtime server...');
  const { close } = await server({
    entrypoint: './src/entry.ts',
    port: 8787,
    env,
    onReload: () => console.log('Reloading...'),
    onError: (err) => console.error(err)
  });
}

main();
