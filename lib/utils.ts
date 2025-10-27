import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  });

  return formatter.format(date);
};

export const getDurationDays = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = end.getTime() - start.getTime();

  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays + 1;
};

export const capitalizeWords = (text: string) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
