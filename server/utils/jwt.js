const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

if (process.env.NODE_ENV !== "production" && !process.env.JWT_SECRET) {
  console.warn("[jwt] Using fallback JWT secret (set JWT_SECRET in env)");
}

export default JWT_SECRET;
