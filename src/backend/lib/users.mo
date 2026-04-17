import Types "../types/users";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func getProfile(
    users : List.List<Types.UserProfileInternal>,
    userId : Types.UserId,
  ) : ?Types.UserProfile {
    Runtime.trap("not implemented");
  };

  public func updateProfile(
    users : List.List<Types.UserProfileInternal>,
    caller : Types.UserId,
    username : Text,
    displayName : Text,
    bio : Text,
    profilePic : Text,
    coverPhoto : Text,
    isPrivate : Bool,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func registerUser(
    users : List.List<Types.UserProfileInternal>,
    caller : Types.UserId,
    username : Text,
    displayName : Text,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func setOnlineStatus(
    users : List.List<Types.UserProfileInternal>,
    userId : Types.UserId,
    isOnline : Bool,
  ) : () {
    Runtime.trap("not implemented");
  };

  public func toPublic(self : Types.UserProfileInternal) : Types.UserProfile {
    Runtime.trap("not implemented");
  };
};
