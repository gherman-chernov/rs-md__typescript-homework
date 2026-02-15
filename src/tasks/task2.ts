import { NormalizedPosts, type IdsPosts, type Post } from "./data2.js"

export default function normalizeData(posts: Post[]): NormalizedPosts {
  const allIds = []
  const byId = {} as IdsPosts

  for(let p of posts) {
    allIds.push(p.id)
    byId[p.id] = p
  }

  return new NormalizedPosts(byId, allIds);
}