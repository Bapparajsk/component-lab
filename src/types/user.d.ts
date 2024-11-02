export type UserTypes = {
  id: string;
  name: string;
  displayName: string;
  userImage: string;
  gender: "he/him" | "she/her";
  description: string;
  links: { title: string, url: string }[];
  posts: number;
  followers: number;
  following: number;
  likedPosts: number;
  liked: number;
  language: { title: string, url: string }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserContextType {
  user: UserTypes | null;
  isUserLoggedIn: () => boolean;
}
