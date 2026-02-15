export const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface FullComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export class CommentEmail {
  constructor(public ID: number, public Email: string) {}
}

export async function getData(url: string): Promise<CommentEmail[]> {
  const response = await fetch(url);
  if (!response.ok) {
      throw new Error('Bad response');
  }
  const json = await response.json();

  return json.map((_: FullComment) => new CommentEmail(_.id, _.email))
}