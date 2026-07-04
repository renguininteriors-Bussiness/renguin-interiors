const API_URL =
  "https://script.google.com/macros/s/AKfycbzhFAWIIcqEsRwVrFsooHiuE_l4x-OTpdCMH-E_O1v3gZpg7nB9BJlwTsdc2KE7yESl/exec";

export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
  service: string;
  area: string;
  budget: string;
  message: string;
}

export async function sendEnquiry(data: EnquiryData) {
  const response = await fetch(API_URL, {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  const result = await response.text();

  console.log(result);

  return result;
}