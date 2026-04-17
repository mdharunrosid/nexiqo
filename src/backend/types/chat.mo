import Common "common";

module {
  public type ConversationId = Common.ConversationId;
  public type MessageId = Common.MessageId;
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type Message = {
    id : MessageId;
    conversationId : ConversationId;
    senderId : UserId;
    content : Text;
    createdAt : Timestamp;
  };

  public type Conversation = {
    id : ConversationId;
    participants : [UserId];
    lastMessage : ?Text;
    lastMessageAt : ?Timestamp;
  };

  public type ConversationPreview = {
    id : ConversationId;
    otherUserId : UserId;
    otherUsername : Text;
    otherProfilePic : Text;
    lastMessage : ?Text;
    lastMessageAt : ?Timestamp;
    isOtherOnline : Bool;
  };
};
