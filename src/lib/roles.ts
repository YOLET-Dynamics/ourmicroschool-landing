export type RoleCode = "student" | "teacher" | "parent" | "admin";

export const roleDomain: Record<RoleCode, string> = {
  student:
    process.env.NEXT_PUBLIC_STUDENT_APP_URL || "https://app.ourmicroschool.com",
  teacher:
    process.env.NEXT_PUBLIC_TEACHER_APP_URL ||
    "https://classrooms.ourmicroschool.com",
  parent:
    process.env.NEXT_PUBLIC_PARENT_APP_URL ||
    "https://parents.ourmicroschool.com",
  admin:
    process.env.NEXT_PUBLIC_ADMIN_APP_URL || "https://admin.ourmicroschool.com",
};

/* role precedence when user has >1 role */
const precedence: RoleCode[] = ["teacher", "student", "parent"];

export function pickPrimary(roles: string[]): RoleCode {
  const set = new Set(roles.map((r) => r.toLowerCase()));
  for (const r of precedence) if (set.has(r)) return r;
  throw new Error("no matching role");
}
