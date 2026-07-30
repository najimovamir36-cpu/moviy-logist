import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { applicationSchema } from "@/lib/validation";
import { isAuthenticated } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const parsed = applicationSchema.safeParse(body);

    if (!parsed.success) {
      const message =
        parsed.error.issues[0]?.message ?? "Ma'lumotlar noto'g'ri";
      return NextResponse.json({ message }, { status: 400 });
    }

    const application = await prisma.application.create({
      data: {
        fullName: parsed.data.fullName,
        telegram: parsed.data.telegram,
      },
      select: { id: true, createdAt: true },
    });

    return NextResponse.json(
      { message: "Murojaatingiz muvaffaqiyatli yuborildi.", id: application.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[applications:POST]", error);
    return NextResponse.json(
      { message: "Serverda xatolik yuz berdi. Keyinroq urinib ko'ring." },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ message: "Ruxsat yo'q" }, { status: 401 });
  }

  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ applications });
}
