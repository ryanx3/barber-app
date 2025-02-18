import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, ownerFullName, description, phone, email } = await req.json();
    
    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required.";
    if (!ownerFullName) errors.ownerFullName = "Owner name is required.";
    if (!email) errors.email = "Email is required.";
    if (!phone) errors.phone = "Phone is required.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors: errors }, { status: 400 });
    }

    const [existingCompanyEmail, existingCompanyName] = await Promise.all([
      prisma.company.findUnique({ where: { email } }),
      prisma.company.findUnique({ where: { name } })
    ]);

    if (existingCompanyEmail) {
      return NextResponse.json({ error: "Email already registered!" }, { status: 400 });
    }
    if (existingCompanyName) {
      return NextResponse.json({ error: "Company name already registered!" }, { status: 400 });
    }

    await prisma.company.create({
      data: {
        name,
        ownerFullName,
        description,
        email,
        phone
      },
    });
    return NextResponse.json(null, { status: 201 });
  } catch (error) {
    console.error("Error to create company:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
