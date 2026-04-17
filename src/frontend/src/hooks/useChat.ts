import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  Conversation,
  ConversationId,
  ConversationPreview,
  Message,
  UserId,
} from "../types";

export function useConversations() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ConversationPreview[]>({
    queryKey: ["chat", "conversations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getConversations();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 5000,
  });
}

export function useMessages(
  conversationId: ConversationId | null,
  limit = 50,
  offset = 0,
) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Message[]>({
    queryKey: ["chat", "messages", conversationId?.toString(), limit, offset],
    queryFn: async () => {
      if (!actor || conversationId === null) return [];
      return actor.getMessages(conversationId, BigInt(limit), BigInt(offset));
    },
    enabled: !!actor && !isFetching && conversationId !== null,
    refetchInterval: 3000,
  });
}

export function useSendMessage() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      conversationId,
      content,
    }: { conversationId: ConversationId; content: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.sendMessage(conversationId, content);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["chat", "messages", variables.conversationId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
    },
  });
}

export function useStartConversation() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<Conversation, Error, UserId>({
    mutationFn: async (otherUserId: UserId) => {
      if (!actor) throw new Error("Not connected");
      return actor.startConversation(otherUserId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
    },
  });
}

export function useSetOnlineStatus() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (isOnline: boolean) => {
      if (!actor) throw new Error("Not connected");
      return actor.setOnlineStatus(isOnline);
    },
  });
}
