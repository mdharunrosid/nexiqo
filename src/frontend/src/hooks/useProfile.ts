import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { UserId, UserProfile } from "../types";

export function useMyProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile | null>({
    queryKey: ["profile", "me"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProfile(userId: UserId | null) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProfile | null>({
    queryKey: ["profile", userId?.toString()],
    queryFn: async () => {
      if (!actor || !userId) return null;
      return actor.getProfile(userId);
    },
    enabled: !!actor && !isFetching && !!userId,
  });
}

export function useUpdateProfile() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      username: string;
      displayName: string;
      bio: string;
      profilePic: string;
      coverPhoto: string;
      isPrivate: boolean;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateProfile(
        data.username,
        data.displayName,
        data.bio,
        data.profilePic,
        data.coverPhoto,
        data.isPrivate,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}

export function useRegisterUser() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      username,
      displayName,
    }: { username: string; displayName: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.registerUser(username, displayName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}
