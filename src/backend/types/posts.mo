import Common "common";

module {
  public type PostId = Common.PostId;
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type PostType = {
    #image;
    #text_;
    #reel;
  };

  public type Post = {
    id : PostId;
    authorId : UserId;
    type_ : PostType;
    content : Text;
    imageUrl : Text;
    reelUrl : Text;
    caption : Text;
    likeCount : Nat;
    commentCount : Nat;
    shareCount : Nat;
    createdAt : Timestamp;
  };

  public type PostInternal = {
    id : PostId;
    authorId : UserId;
    type_ : PostType;
    content : Text;
    imageUrl : Text;
    reelUrl : Text;
    caption : Text;
    var likeCount : Nat;
    var commentCount : Nat;
    var shareCount : Nat;
    createdAt : Timestamp;
  };

  public type Story = {
    id : Common.StoryId;
    authorId : UserId;
    mediaUrl : Text;
    expiresAt : Timestamp;
  };

  public type CreatePostRequest = {
    type_ : PostType;
    content : Text;
    imageUrl : Text;
    reelUrl : Text;
    caption : Text;
  };
};
