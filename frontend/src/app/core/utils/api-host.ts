const DEFAULT_HOST = 'localhost';

export function resolveApiHost(): string {
  if (typeof window !== 'undefined' && window.location?.hostname) {
    return window.location.hostname;
  }
  return DEFAULT_HOST;
}
