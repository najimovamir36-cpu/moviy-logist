import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ message: "Ruxsat yo'q" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.application.delete({ where: { id } });
    return NextResponse.json({ message: "O'chirildi" });
  } catch (error) {
    console.error("[applications:DELETE]", error);
    return NextResponse.json(
      { message: "Murojaat topilmadi yoki o'chirib bo'lmadi" },
      { status: 404 }
    );
  }
}
