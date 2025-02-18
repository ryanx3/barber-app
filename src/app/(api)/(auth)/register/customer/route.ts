import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, password } = await req.json();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    if (!phone) errors.phone = "Phone is required.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors: errors }, { status: 400 });
    }

    const existingCustomerEmail = await prisma.customer.findUnique({ where: { email } })
    const existingCompanyEmail = await prisma.company.findFirst({ where: { email } });

    if (existingCustomerEmail || existingCompanyEmail) {
      return NextResponse.json({ error: "Email already registered!" }, { status: 400 });
    }

    const hashedPassword = await hash(password, 8)
    await prisma.customer.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
      },
    });
    return NextResponse.json({ message: "Customer created successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error to create user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
