import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { Post, Story } from "../types";

export function useFeedPosts(limit = 10, offset = 0) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Post[]>({
    queryKey: ["feed", limit, offset],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeedPosts(BigInt(limit), BigInt(offset));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useActiveStories() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Story[]>({
    queryKey: ["stories", "active"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActiveStories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLikePost() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (postId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.likePost(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
  });
}

export function useCreatePost() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req: {
      content: string;
      imageUrl?: string;
      caption?: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      const { PostType } = await import("../backend");
      return actor.createPost({
        content: req.content,
        type: PostType.text,
        reelUrl: "",
        imageUrl: req.imageUrl ?? "",
        caption: req.caption ?? "",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
  });
}
