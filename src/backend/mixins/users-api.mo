import UserTypes "../types/users";
import UserLib "../lib/users";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (users : List.List<UserTypes.UserProfileInternal>) {
  public shared ({ caller }) func registerUser(
    username : Text,
    displayName : Text,
  ) : async Bool {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func updateProfile(
    username : Text,
    displayName : Text,
    bio : Text,
    profilePic : Text,
    coverPhoto : Text,
    isPrivate : Bool,
  ) : async Bool {
    Runtime.trap("not implemented");
  };

  public query func getProfile(userId : UserTypes.UserId) : async ?UserTypes.UserProfile {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func setOnlineStatus(isOnline : Bool) : async () {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getMyProfile() : async ?UserTypes.UserProfile {
    Runtime.trap("not implemented");
  };
};
