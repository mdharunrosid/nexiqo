import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { Post } from "../types";

export function useTrendingReels(limit = 20) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Post[]>({
    queryKey: ["reels", "trending", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTrendingReels(BigInt(limit));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useReelById(reelId: bigint | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Post | null>({
    queryKey: ["reel", reelId?.toString()],
    queryFn: async () => {
      if (!actor || reelId === null) return null;
      return actor.getReelById(reelId);
    },
    enabled: !!actor && !isFetching && reelId !== null,
  });
}

export function useLikeReel() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (reelId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.likeReel(reelId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reels"] });
    },
  });
}

export function useShareReel() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (reelId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.shareReel(reelId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reels"] });
    },
  });
}

export function useCreateReel() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req: {
      reelUrl: string;
      caption: string;
      content: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      const { PostType } = await import("../backend");
      return actor.createPost({
        content: req.content,
        type: PostType.reel,
        reelUrl: req.reelUrl,
        imageUrl: "",
        caption: req.caption,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reels"] });
    },
  });
}
