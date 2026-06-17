export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

export function getWeb3FormsAccessKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  return key || undefined;
}

export function hasWeb3Forms(): boolean {
  return Boolean(getWeb3FormsAccessKey());
}

export interface Web3FormsPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitWeb3Forms(
  payload: Web3FormsPayload
): Promise<{ success: boolean; message?: string }> {
  const accessKey = getWeb3FormsAccessKey();
  if (!accessKey) {
    return { success: false, message: "Web3Forms access key not configured" };
  }

  const res = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      message: payload.message,
      subject: `Portfolio contact from ${payload.name}`,
      from_name: "CV Portfolio",
      botcheck: "",
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };
  return {
    success: Boolean(res.ok && data.success),
    message: data.message,
  };
}
