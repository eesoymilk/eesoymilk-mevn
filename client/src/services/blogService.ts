import type Blog from "@/models/blog";
import { ref } from "vue";

// auth0 setup
export enum AccessControlLevel {
  PUBLIC = "public",
  PROTECTED = "requires-authentication",
  RBAC = "requires-role-permission",
  CORS = "requires-cors-allowed-method",
}

// const apiServerUrl: string = process.env.VUE_APP_API_SERVER_URL;
export const selectedAccessControlLevel = ref<AccessControlLevel | null>(null);
// auth0 setup end

const url = `${import.meta.env.VITE_VUE_APP_API_SERVER_URL}/api/blog`;
// const url = "/api/blog";

export default interface BlogValidation {
  isValid: boolean;
  titleErrors: string[] | null;
  bodyErrors: string[] | null;
  tagsErrors: string[] | null;
}

export default class BlogService {
  // R: GET BLOG (PUBLIC)
  static async getBlogs() {
    try {
      const blogs = await (await fetch(url)).json();
      return blogs as Promise<Blog[]>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  static async getBlog(id: string) {
    try {
      const blog = await (await fetch(`${url}/${id}`)).json();
      return blog as Promise<Blog>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  // C: CREATE BLOG
  static async createBlog(
    accessToken: string,
    newBlog: Blog
  ): Promise<BlogValidation> {
    let blogValidation: BlogValidation = {
      isValid: false,
      titleErrors: null,
      bodyErrors: null,
      tagsErrors: null,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      console.log(newBlog);
      blogValidation = BlogService.validateBlog(newBlog);
      if (!blogValidation.isValid) throw new Error("Invalid Blog.");
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(newBlog),
      });
      const json = await res.json();
      console.log(json);
      return blogValidation;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      return blogValidation;
    }
  }

  // U: UPDTAE BLOG
  static async updateBlog(accessToken: string, id: string, updatedBlog: Blog) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      console.log(id, accessToken, updatedBlog);
      const blogValidation = BlogService.validateBlog(updatedBlog);
      if (!blogValidation.isValid) throw new Error("Invalid Blog.");
      const res = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(updatedBlog),
      });
      const json = await res.json();
      console.log(json);
      return blogValidation;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  // D: DELETE BLOG
  static async deleteBlog(accessToken: string, id: string) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const res = await fetch(`${url}/${id}`, {
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

  // VALIDATION
  static validateBlog = (blog: Blog): BlogValidation => {
    let isValid = true;

    // All 3 functions must run.
    const titleErrors = this.validateTitle(blog.title);
    const bodyErrors = this.validateBody(blog.body);
    const tagsErrors = this.validateTags(blog.tags);

    if (titleErrors || bodyErrors || tagsErrors) isValid = false;
    return { isValid, titleErrors, bodyErrors, tagsErrors } as BlogValidation;
  };

  static validateTitle(title: string): string[] | null {
    const errors: string[] = [];

    if (!title) errors.push("A title is required.");
    if (title.length > 30) errors.push("The title is too long.");

    if (errors.length) return errors;
    return null;
  }

  static validateBody(body: string): string[] | null {
    const errors: string[] = [];

    if (!body) errors.push("A blog content is required.");

    if (errors.length) return errors;
    return null;
  }

  static validateTags(tags: string[]): string[] | null {
    const errors: string[] = [];

    if (!tags.length) errors.push("Add at least ONE tag.");

    if (errors.length) return errors;
    return null;
  }
}
