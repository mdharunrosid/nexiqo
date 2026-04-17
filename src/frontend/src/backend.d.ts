import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface FriendSuggestion {
    username: string;
    displayName: string;
    userId: UserId;
    mutualFollowers: bigint;
    profilePic: string;
}
export type PostId = bigint;
export type StoryId = bigint;
export interface Story {
    id: StoryId;
    expiresAt: Timestamp;
    authorId: UserId;
    mediaUrl: string;
}
export interface ConversationPreview {
    id: ConversationId;
    isOtherOnline: boolean;
    lastMessageAt?: Timestamp;
    otherUsername: string;
    otherUserId: UserId;
    otherProfilePic: string;
    lastMessage?: string;
}
export type ConversationId = bigint;
export type UserId = Principal;
export type MessageId = bigint;
export interface Post {
    id: PostId;
    likeCount: bigint;
    content: string;
    authorId: UserId;
    createdAt: Timestamp;
    type: PostType;
    reelUrl: string;
    shareCount: bigint;
    imageUrl: string;
    caption: string;
    commentCount: bigint;
}
export type NotificationId = bigint;
export interface Notification {
    id: NotificationId;
    userId: UserId;
    createdAt: Timestamp;
    type: NotificationType;
    isRead: boolean;
    actorId: UserId;
    entityId: bigint;
}
export interface Message {
    id: MessageId;
    content: string;
    createdAt: Timestamp;
    conversationId: ConversationId;
    senderId: UserId;
}
export interface CreatePostRequest {
    content: string;
    type: PostType;
    reelUrl: string;
    imageUrl: string;
    caption: string;
}
export interface Conversation {
    id: ConversationId;
    participants: Array<UserId>;
    lastMessageAt?: Timestamp;
    lastMessage?: string;
}
export interface UserProfile {
    id: UserId;
    bio: string;
    postCount: bigint;
    username: string;
    displayName: string;
    isOnline: boolean;
    coverPhoto: string;
    isPrivate: boolean;
    followerCount: bigint;
    followingCount: bigint;
    profilePic: string;
}
export enum NotificationType {
    like = "like",
    live = "live",
    comment = "comment",
    follow = "follow"
}
export enum PostType {
    reel = "reel",
    text = "text",
    image = "image"
}
export interface backendInterface {
    createPost(req: CreatePostRequest): Promise<Post>;
    createStory(mediaUrl: string, expiresAt: Timestamp): Promise<Story>;
    follow(targetId: UserId): Promise<boolean>;
    getActiveStories(): Promise<Array<Story>>;
    getConversations(): Promise<Array<ConversationPreview>>;
    getFeedPosts(limit: bigint, offset: bigint): Promise<Array<Post>>;
    getFollowers(userId: UserId): Promise<Array<UserProfile>>;
    getFollowing(userId: UserId): Promise<Array<UserProfile>>;
    getFriendSuggestions(limit: bigint): Promise<Array<FriendSuggestion>>;
    getMessages(conversationId: ConversationId, limit: bigint, offset: bigint): Promise<Array<Message>>;
    getMyNotifications(limit: bigint, offset: bigint): Promise<Array<Notification>>;
    getMyProfile(): Promise<UserProfile | null>;
    getPost(postId: PostId): Promise<Post | null>;
    getProfile(userId: UserId): Promise<UserProfile | null>;
    getReelById(reelId: PostId): Promise<Post | null>;
    getTrendingReels(limit: bigint): Promise<Array<Post>>;
    getUnreadNotificationCount(): Promise<bigint>;
    getUserStories(userId: UserId): Promise<Array<Story>>;
    isFollowing(follower: UserId, followee: UserId): Promise<boolean>;
    likePost(postId: PostId): Promise<boolean>;
    likeReel(reelId: PostId): Promise<boolean>;
    markAllNotificationsRead(): Promise<bigint>;
    markNotificationRead(notificationId: NotificationId): Promise<boolean>;
    registerUser(username: string, displayName: string): Promise<boolean>;
    sendMessage(conversationId: ConversationId, content: string): Promise<Message>;
    setOnlineStatus(isOnline: boolean): Promise<void>;
    shareReel(reelId: PostId): Promise<boolean>;
    startConversation(otherUserId: UserId): Promise<Conversation>;
    unfollow(targetId: UserId): Promise<boolean>;
    updateProfile(username: string, displayName: string, bio: string, profilePic: string, coverPhoto: string, isPrivate: boolean): Promise<boolean>;
}
