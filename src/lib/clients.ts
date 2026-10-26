/**
 * Logos of real customers who agreed to be shown.
 * The logo strip renders only when there are at least 4.
 */
export interface Client {
  name: string;
  /** e.g. "/brand/clients/x.svg" */
  logo: string;
}

export const clients: Client[] = [];

export const MIN_CLIENT_LOGOS = 4;

export function visibleClients(): Client[] {
  return clients.length >= MIN_CLIENT_LOGOS ? clients : [];
}
