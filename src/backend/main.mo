import UserTypes "types/users";
import PostTypes "types/posts";
import ChatTypes "types/chat";
import NotifTypes "types/notifications";
import CommonTypes "types/common";
import UsersMixin "mixins/users-api";
import PostsMixin "mixins/posts-api";
import ReelsMixin "mixins/reels-api";
import SocialMixin "mixins/social-api";
import NotifMixin "mixins/notifications-api";
import ChatMixin "mixins/chat-api";
import List "mo:core/List";
import Map "mo:core/Map";
import Set "mo:core/Set";

actor {
  // Users state
  let users = List.empty<UserTypes.UserProfileInternal>();

  // Posts & Stories state
  let posts = List.empty<PostTypes.PostInternal>();
  let stories = List.empty<PostTypes.Story>();
  var nextPostId : Nat = 0;
  var nextStoryId : Nat = 0;

  // Social graph state
  let followersMap = Map.empty<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>();
  let followingMap = Map.empty<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>();

  // Notifications state
  let notifications = List.empty<NotifTypes.NotificationInternal>();
  var nextNotifId : Nat = 0;

  // Chat state
  let conversations = List.empty<ChatTypes.Conversation>();
  let messages = List.empty<ChatTypes.Message>();
  var nextConvId : Nat = 0;
  var nextMsgId : Nat = 0;

  // Include domain mixins
  include UsersMixin(users);
  include PostsMixin(posts, stories, nextPostId, nextStoryId);
  include ReelsMixin(posts);
  include SocialMixin(followersMap, followingMap, users);
  include NotifMixin(notifications, nextNotifId);
  include ChatMixin(conversations, messages, users, nextConvId, nextMsgId);
};
