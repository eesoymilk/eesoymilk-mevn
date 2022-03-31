import type ShortUrl from "@/models/shortUrl";

const serverUrl = `${import.meta.env.VITE_VUE_APP_API_SERVER_URL}/api/shortUrl`;
const headers = {
  "Content-Type": "application/json",
};

export default class ShortUrlService {
  // R: GET SHORT URL
  static async getShortUrls() {
    try {
      const res = await fetch(serverUrl, { method: "GET", headers });
      const shortUrls = await res.json();
      return shortUrls as Promise<ShortUrl[]>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  // C: CREATE SHORT URL
  static async createShortUrl(newShortUrl: ShortUrl): Promise<boolean> {
    try {
      console.log(newShortUrl);
      const res = await fetch(serverUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(newShortUrl),
      });
      console.log(await res.json());
      if (res.status !== 201) return false;
      return true;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      return false;
    }
  }

  // D: DELETE SHORT URL
  static async deleteShortUrl(id: string) {
    try {
      const res = await fetch(serverUrl, {
        method: "DELETE",
        headers,
        body: JSON.stringify({ id }),
      });
      console.log(res);
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }
}
