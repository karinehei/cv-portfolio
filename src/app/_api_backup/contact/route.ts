import { NextRequest, NextResponse } from "next/server";
import {
  CONTACT_MESSAGES,
  getFirstValidationMessage,
  hasFieldErrors,
  validateContactFields,
} from "@/lib/contactValidation";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: CONTACT_MESSAGES.invalidBody },
      { status: 400 }
    );
  }

  const errors = validateContactFields({
    name: body.name ?? "",
    email: body.email ?? "",
    message: body.message ?? "",
  });

  if (hasFieldErrors(errors)) {
    return NextResponse.json(
      {
        success: false,
        message: getFirstValidationMessage(errors),
      },
      { status: 400 }
    );
  }

  console.info("[contact] New message:", {
    name: body.name?.trim(),
    email: body.email?.trim(),
    messageLength: body.message?.trim().length,
  });

  return NextResponse.json(
    {
      success: true,
      message: CONTACT_MESSAGES.success,
    },
    { status: 200 }
  );
}
