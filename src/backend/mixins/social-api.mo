import SocialTypes "../types/social";
import UserTypes "../types/users";
import CommonTypes "../types/common";
import SocialLib "../lib/social";
import Map "mo:core/Map";
import Set "mo:core/Set";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  followers : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
  following : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
  users : List.List<UserTypes.UserProfileInternal>,
) {
  public shared ({ caller }) func follow(targetId : CommonTypes.UserId) : async Bool {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func unfollow(targetId : CommonTypes.UserId) : async Bool {
    Runtime.trap("not implemented");
  };

  public query func getFollowers(userId : CommonTypes.UserId) : async [UserTypes.UserProfile] {
    Runtime.trap("not implemented");
  };

  public query func getFollowing(userId : CommonTypes.UserId) : async [UserTypes.UserProfile] {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getFriendSuggestions(limit : Nat) : async [SocialTypes.FriendSuggestion] {
    Runtime.trap("not implemented");
  };

  public query func isFollowing(
    follower : CommonTypes.UserId,
    followee : CommonTypes.UserId,
  ) : async Bool {
    Runtime.trap("not implemented");
  };
};
