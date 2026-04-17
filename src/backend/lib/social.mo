import SocialTypes "../types/social";
import UserTypes "../types/users";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Set "mo:core/Set";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func follow(
    followers : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    following : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    users : List.List<UserTypes.UserProfileInternal>,
    caller : CommonTypes.UserId,
    targetId : CommonTypes.UserId,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func unfollow(
    followers : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    following : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    users : List.List<UserTypes.UserProfileInternal>,
    caller : CommonTypes.UserId,
    targetId : CommonTypes.UserId,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func getFollowers(
    followers : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    users : List.List<UserTypes.UserProfileInternal>,
    userId : CommonTypes.UserId,
  ) : [UserTypes.UserProfile] {
    Runtime.trap("not implemented");
  };

  public func getFollowing(
    following : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    users : List.List<UserTypes.UserProfileInternal>,
    userId : CommonTypes.UserId,
  ) : [UserTypes.UserProfile] {
    Runtime.trap("not implemented");
  };

  public func getFriendSuggestions(
    followers : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    following : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    users : List.List<UserTypes.UserProfileInternal>,
    caller : CommonTypes.UserId,
    limit : Nat,
  ) : [SocialTypes.FriendSuggestion] {
    Runtime.trap("not implemented");
  };

  public func isFollowing(
    following : Map.Map<CommonTypes.UserId, Set.Set<CommonTypes.UserId>>,
    follower : CommonTypes.UserId,
    followee : CommonTypes.UserId,
  ) : Bool {
    Runtime.trap("not implemented");
  };
};
