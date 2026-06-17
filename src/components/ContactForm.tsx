"use client";

import { FormEvent, useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { translateApiMessage } from "@/lib/i18n";
import { withBasePath } from "@/lib/paths";
import {
  hasFieldErrors,
  validateContactFields,
  type FieldErrors,
} from "@/lib/contactValidation";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const FIELD_ORDER: (keyof FormState)[] = ["name", "email", "message"];

function describedByForField(
  field: keyof FormState,
  errors: FieldErrors,
  hintId?: string
): string | undefined {
  const ids: string[] = [];
  if (hintId) ids.push(hintId);
  const errorId = `contact-${field}-error`;
  if (errors[field]) ids.push(errorId);
  return ids.length > 0 ? ids.join(" ") : undefined;
}

export function ContactForm() {
  const { locale, t } = useLanguage();
  const messages = t.contact.messages;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const isSubmitting = status === "loading";
  const errorCount = Object.keys(errors).length;

  useEffect(() => {
    if (!hasFieldErrors(errors)) return;

    const firstInvalid = FIELD_ORDER.find((field) => errors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
    }
  }, [errors]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setServerMessage("");
    setStatus("idle");

    const clientErrors = validateContactFields(form, messages);
    if (hasFieldErrors(clientErrors)) {
      setErrors(clientErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(withBasePath("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || data.success === false) {
        const raw = data.message ?? messages.genericError;
        setServerMessage(translateApiMessage(raw, locale));
        setStatus("error");
        return;
      }

      setServerMessage(messages.success);
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setServerMessage(messages.networkError);
      setStatus("error");
    }
  };

  const clearFieldError = (field: keyof FormState) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      data-testid="contact-form"
      aria-labelledby="contact-heading"
      aria-busy={isSubmitting}
    >
      <div
        id="contact-form-announcer"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {errorCount > 0 && messages.formErrorSummary(errorCount)}
        {status === "success" && serverMessage}
        {status === "error" && serverMessage}
      </div>

      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">
          {t.contact.nameLabel}{" "}
          <span className="form-required" aria-hidden="true">*</span>
          <span className="sr-only">{t.contact.required}</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className="form-input"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
            clearFieldError("name");
          }}
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedByForField("name", errors)}
          data-testid="contact-name"
          autoComplete="name"
        />
        {errors.name && (
          <p
            id="contact-name-error"
            className="form-error"
            role="alert"
            data-testid="contact-name-error"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">
          {t.contact.emailLabel}{" "}
          <span className="form-required" aria-hidden="true">*</span>
          <span className="sr-only">{t.contact.required}</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="form-input"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
            clearFieldError("email");
          }}
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedByForField("email", errors)}
          data-testid="contact-email"
          autoComplete="email"
        />
        {errors.email && (
          <p
            id="contact-email-error"
            className="form-error"
            role="alert"
            data-testid="contact-email-error"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          {t.contact.messageLabel}{" "}
          <span className="form-required" aria-hidden="true">*</span>
          <span className="sr-only">{t.contact.messageRequiredHint}</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-textarea"
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            clearFieldError("message");
          }}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedByForField("message", errors, "contact-message-hint")}
          data-testid="contact-message"
        />
        <p id="contact-message-hint" className="form-hint">
          {t.contact.messageHint}
        </p>
        {errors.message && (
          <p
            id="contact-message-error"
            className="form-error"
            role="alert"
            data-testid="contact-message-error"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        data-testid="contact-submit"
      >
        {isSubmitting ? t.contact.submitting : t.contact.submit}
      </button>

      {status === "success" && (
        <p className="form-success" role="status" data-testid="contact-success">
          {serverMessage}
        </p>
      )}
      {status === "error" && serverMessage && (
        <p className="form-error" role="alert" data-testid="contact-error">
          {serverMessage}
        </p>
      )}
    </form>
  );
}
