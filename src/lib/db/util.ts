export function getJSONBody(body: BodyInit | null | undefined) {
  return new Response(body, {
    headers: { 'Content-Type': 'application/json' },
  }).json();
}

export function handleError(error: Error) {
  console.log(error);
  return { error };
}
