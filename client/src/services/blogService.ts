import type Blog from "@/interfaces/blogInterface";

const url = "http://localhost:5000/api/blog";
const headers = {
  "Content-Type": "application/json",
};

export default interface BlogValidation {
  isValid: boolean;
  titleErrors: string[] | null;
  bodyErrors: string[] | null;
  tagsErrors: string[] | null;
}

export default class BlogService {
  // R: GET BLOG
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
  static async createBlog(newBlog: Blog): Promise<BlogValidation> {
    let blogValidation: BlogValidation = {
      isValid: false,
      titleErrors: null,
      bodyErrors: null,
      tagsErrors: null,
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
  static async upadteBlog(id: string, updatedBlog: Blog) {
    try {
      console.log(id, updatedBlog);
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  // D: DELETE BLOG
  static async deleteBlog(id: string) {
    try {
      console.log(id);
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
