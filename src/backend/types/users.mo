import Common "common";

module {
  public type UserId = Common.UserId;

  public type UserProfile = {
    id : UserId;
    username : Text;
    displayName : Text;
    bio : Text;
    profilePic : Text;
    coverPhoto : Text;
    followerCount : Nat;
    followingCount : Nat;
    postCount : Nat;
    isPrivate : Bool;
    isOnline : Bool;
  };

  public type UserProfileInternal = {
    id : UserId;
    var username : Text;
    var displayName : Text;
    var bio : Text;
    var profilePic : Text;
    var coverPhoto : Text;
    var followerCount : Nat;
    var followingCount : Nat;
    var postCount : Nat;
    var isPrivate : Bool;
    var isOnline : Bool;
  };
};
