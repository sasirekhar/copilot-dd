function splitURLandReturnComponents(url) {
  const urlParts = url.split('/');
  const protocol = urlParts[0];
  const domain = urlParts[2];
  const path = urlParts.slice(3).join('/');
  return { protocol, domain, path };
}