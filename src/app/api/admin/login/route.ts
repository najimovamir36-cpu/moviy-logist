import { NextResponse } from "next/server";
import { verifyCredentials, createSession } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const username = String(body?.username ?? "");
  const password = String(body?.password ?? "");

  if (!verifyCredentials(username, password)) {
    return NextResponse.json(
      { message: "Login yoki parol noto'g'ri" },
      { status: 401 }
    );
  }

  await createSession();
  return NextResponse.json({ message: "Muvaffaqiyatli kirdingiz" });
}
