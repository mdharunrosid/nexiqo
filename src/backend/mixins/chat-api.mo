import ChatTypes "../types/chat";
import UserTypes "../types/users";
import CommonTypes "../types/common";
import ChatLib "../lib/chat";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  conversations : List.List<ChatTypes.Conversation>,
  messages : List.List<ChatTypes.Message>,
  users : List.List<UserTypes.UserProfileInternal>,
  nextConvId : Nat,
  nextMsgId : Nat,
) {
  public query ({ caller }) func getConversations() : async [ChatTypes.ConversationPreview] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func sendMessage(
    conversationId : ChatTypes.ConversationId,
    content : Text,
  ) : async ChatTypes.Message {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getMessages(
    conversationId : ChatTypes.ConversationId,
    limit : Nat,
    offset : Nat,
  ) : async [ChatTypes.Message] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func startConversation(
    otherUserId : CommonTypes.UserId,
  ) : async ChatTypes.Conversation {
    Runtime.trap("not implemented");
  };
};
