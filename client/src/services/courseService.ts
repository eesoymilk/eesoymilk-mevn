import type Course from "@/models/course";

const url = `${import.meta.env.VITE_VUE_APP_API_SERVER_URL}/api/course`;
const headers = {
  "Content-Type": "application/json",
};

// export default interface CourseValidation {
//   isValid: boolean;
//   titleErrors: string[] | null;
//   bodyErrors: string[] | null;
//   tagsErrors: string[] | null;
// }

export default class CourseService {
  // R: GET COURSE
  static async getCourses(accessToken: string) {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };
      const res = await fetch(url, { method: "GET", headers });
      const courses = await res.json();
      return courses as Promise<Course[]>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  static async getCourse(id: string) {
    try {
      const course = await (await fetch(`${url}/${id}`)).json();
      return course as Promise<Course>;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  // C: CREATE COURSE
  static async createCourse(newCourse: Course) {
    // let courseValidation: CourseValidation = {
    //   isValid: false,
    //   titleErrors: null,
    //   bodyErrors: null,
    //   tagsErrors: null,
    // };
    try {
      console.log(newCourse);
      //   courseValidation = CourseService.validateCourse(newCourse);
      //   if (!courseValidation.isValid) throw new Error("Invalid Course.");
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(newCourse),
      });
      const json = await res.json();
      console.log(json);
      //   return courseValidation;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      //   return courseValidation;
    }
  }

  // U: UPDTAE COURSE
  static async upadteCourse(id: string, updatedCourse: Course) {
    try {
      console.log(id, updatedCourse);
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  // D: DELETE COURSE
  static async deleteCourse(id: string) {
    try {
      console.log(id);
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err);
      return null;
    }
  }

  //   // VALIDATION
  //   static validateCourse = (course: Course): CourseValidation => {
  //     let isValid = true;

  //     // All 3 functions must run.
  //     const titleErrors = this.validateTitle(course.title);
  //     const bodyErrors = this.validateBody(course.body);
  //     const tagsErrors = this.validateTags(course.tags);

  //     if (titleErrors || bodyErrors || tagsErrors) isValid = false;
  //     return { isValid, titleErrors, bodyErrors, tagsErrors } as CourseValidation;
  //   };

  //   static validateTitle(title: string): string[] | null {
  //     const errors: string[] = [];

  //     if (!title) errors.push("A title is required.");
  //     if (title.length > 30) errors.push("The title is too long.");

  //     if (errors.length) return errors;
  //     return null;
  //   }

  //   static validateBody(body: string): string[] | null {
  //     const errors: string[] = [];

  //     if (!body) errors.push("A course content is required.");

  //     if (errors.length) return errors;
  //     return null;
  //   }

  //   static validateTags(tags: string[]): string[] | null {
  //     const errors: string[] = [];

  //     if (!tags.length) errors.push("Add at least ONE tag.");

  //     if (errors.length) return errors;
  //     return null;
  //   }
}
