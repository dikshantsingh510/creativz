export function getBaseUrl(){
    if(typeof window === undefined){
        return window.location.origin
    }
    // return "https://creativz.com/r"; 
    return process.env.NEXT_PUBLIC_BASE_URL; 
}

// Validates if a string is a valid URL with http:// or https://
export const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  };

  // Generates a random 6-character alphanumeric short code
export const generateShortCode = (): string => {
    return Math.random().toString(36).slice(2, 8);
  };
  
  // Validates custom short code format (3–20 alphanumeric chars, underscores, hyphens)
  export const isValidCustomCode = (code: string): boolean => {
    return /^[a-zA-Z0-9_-]{3,20}$/.test(code);
  };