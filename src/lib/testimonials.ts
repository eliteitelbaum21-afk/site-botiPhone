/**
 * Real customer testimonials only, each with the customer's written approval.
 * The section renders only the `approved` ones, and only when there are at least 2.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  business: string;
  /** e.g. "/brand/clients/x.svg" */
  logo?: string;
  approved: boolean;
}

export const testimonials: Testimonial[] = [];

export const MIN_TESTIMONIALS = 2;

export function approvedTestimonials(): Testimonial[] {
  const list = testimonials.filter((t) => t.approved);
  return list.length >= MIN_TESTIMONIALS ? list : [];
}
