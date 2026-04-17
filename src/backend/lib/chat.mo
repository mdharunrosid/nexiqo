import ChatTypes "../types/chat";
import UserTypes "../types/users";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func getOrCreateConversation(
    conversations : List.List<ChatTypes.Conversation>,
    nextId : Nat,
    participantA : CommonTypes.UserId,
    participantB : CommonTypes.UserId,
  ) : ChatTypes.Conversation {
    Runtime.trap("not implemented");
  };

  public func sendMessage(
    conversations : List.List<ChatTypes.Conversation>,
    messages : List.List<ChatTypes.Message>,
    nextMsgId : Nat,
    caller : CommonTypes.UserId,
    conversationId : ChatTypes.ConversationId,
    content : Text,
  ) : ChatTypes.Message {
    Runtime.trap("not implemented");
  };

  public func getMessages(
    messages : List.List<ChatTypes.Message>,
    conversationId : ChatTypes.ConversationId,
    limit : Nat,
    offset : Nat,
  ) : [ChatTypes.Message] {
    Runtime.trap("not implemented");
  };

  public func getConversationPreviews(
    conversations : List.List<ChatTypes.Conversation>,
    users : List.List<UserTypes.UserProfileInternal>,
    caller : CommonTypes.UserId,
  ) : [ChatTypes.ConversationPreview] {
    Runtime.trap("not implemented");
  };
};
