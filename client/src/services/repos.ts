import type Repository from "@/models/repository";

const ghapi_url = `https://api.github.com`;

export default class ReposService {
  static per_page = 10;

  // GET REPOS
  static async getRepos(username: string, page: number) {
    const url = `${ghapi_url}/users/${username}/repos?per_page=${ReposService.per_page}&page=${page}`;
    try {
      const res = await fetch(url);
      if (res.status === 404) throw new Error("Not Found");
      const repos = await res.json();
      return repos as Promise<Repository[]>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  static async getRepo(username: string, repo: string) {
    const url = `${ghapi_url}/repos/${username}/${repo}`;
    try {
      const res = await fetch(url);
      if (res.status === 404) throw new Error("Not Found");
      const repo = await res.json();
      return repo as Promise<Repository>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }
}
