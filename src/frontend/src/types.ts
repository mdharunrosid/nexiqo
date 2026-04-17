import type {
  Conversation,
  ConversationId,
  ConversationPreview,
  CreatePostRequest,
  FriendSuggestion,
  Message,
  MessageId,
  Notification,
  NotificationId,
  NotificationType,
  Post,
  PostId,
  PostType,
  Story,
  StoryId,
  Timestamp,
  UserId,
  UserProfile,
} from "./backend";

// Re-export backend types
export type {
  Post,
  UserProfile,
  Notification,
  Message,
  ConversationPreview,
  Conversation,
  FriendSuggestion,
  Story,
  PostType,
  NotificationType,
  UserId,
  PostId,
  MessageId,
  ConversationId,
  NotificationId,
  StoryId,
  Timestamp,
  CreatePostRequest,
};

// UI-only types
export interface NavTab {
  id: string;
  label: string;
  path: string;
  icon: string;
}

export type CreateMenuAction = "camera" | "reel" | "image" | "live" | "canvas";

export interface CreateMenuItem {
  id: CreateMenuAction;
  label: string;
  icon: string;
  gradient: string;
}

export interface FeedItem extends Post {
  authorProfile?: UserProfile;
}

export type Theme = "dark";
