import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { FriendSuggestion, UserId, UserProfile } from "../types";

export function useFriendSuggestions(limit = 10) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<FriendSuggestion[]>({
    queryKey: ["friends", "suggestions", limit],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFriendSuggestions(BigInt(limit));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFollowers(userId: UserId | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile[]>({
    queryKey: ["friends", "followers", userId?.toString()],
    queryFn: async () => {
      if (!actor || !userId) return [];
      return actor.getFollowers(userId);
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}

export function useFollowing(userId: UserId | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile[]>({
    queryKey: ["friends", "following", userId?.toString()],
    queryFn: async () => {
      if (!actor || !userId) return [];
      return actor.getFollowing(userId);
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}

export function useIsFollowing(
  follower: UserId | null,
  followee: UserId | null,
) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<boolean>({
    queryKey: [
      "friends",
      "isFollowing",
      follower?.toString(),
      followee?.toString(),
    ],
    queryFn: async () => {
      if (!actor || !follower || !followee) return false;
      return actor.isFollowing(follower, followee);
    },
    enabled: !!actor && !isFetching && !!follower && !!followee,
  });
}

export function useFollow() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (targetId: UserId) => {
      if (!actor) throw new Error("Not connected");
      return actor.follow(targetId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
  });
}

export function useUnfollow() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (targetId: UserId) => {
      if (!actor) throw new Error("Not connected");
      return actor.unfollow(targetId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
  });
}
