export function isSocialMediaLink(link: string): boolean {
  const condition = link.includes('facebook.com')||
                    link.includes('instagram.com');
  return condition;
}