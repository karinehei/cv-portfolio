import type { ContactMessages } from "@/lib/i18n/types";

export const CONTACT_MESSAGES_EN: ContactMessages = {
  nameRequired: "Name is required",
  emailRequired: "Email is required",
  emailInvalid: "Invalid email address",
  messageRequired: "Message is required",
  messageMinLength: "Message must be at least 10 characters",
  invalidBody: "Invalid request body",
  success: "Contact request received",
  networkError: "Network error. Please try again.",
  genericError: "Something went wrong. Please try again.",
  staticHostingError:
    "Message could not be sent — this static site cannot run the contact API (405). Use email or LinkedIn instead.",
  formErrorSummary: (count) =>
    `The form has ${count} error${count === 1 ? "" : "s"}. Please review the fields below.`,
};

export interface ContactFields {
  name: string;
  email: string;
  message: string;
}

export interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactFields(
  fields: ContactFields,
  messages: Pick<
    ContactMessages,
    | "nameRequired"
    | "emailRequired"
    | "emailInvalid"
    | "messageRequired"
    | "messageMinLength"
  > = CONTACT_MESSAGES_EN
): FieldErrors {
  const errors: FieldErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (!name) {
    errors.name = messages.nameRequired;
  }

  if (!email) {
    errors.email = messages.emailRequired;
  } else if (!isValidEmail(email)) {
    errors.email = messages.emailInvalid;
  }

  if (!message) {
    errors.message = messages.messageRequired;
  } else if (message.length < 10) {
    errors.message = messages.messageMinLength;
  }

  return errors;
}

export function getFirstValidationMessage(errors: FieldErrors): string | null {
  return errors.name ?? errors.email ?? errors.message ?? null;
}

export function hasFieldErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
