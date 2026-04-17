import Common "common";

module {
  public type UserId = Common.UserId;

  public type FollowRelation = {
    followerId : UserId;
    followeeId : UserId;
    createdAt : Common.Timestamp;
  };

  public type FriendSuggestion = {
    userId : UserId;
    username : Text;
    displayName : Text;
    profilePic : Text;
    mutualFollowers : Nat;
  };
};
