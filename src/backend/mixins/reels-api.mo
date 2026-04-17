import PostTypes "../types/posts";
import ReelsLib "../lib/reels";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (posts : List.List<PostTypes.PostInternal>) {
  public query func getTrendingReels(limit : Nat) : async [PostTypes.Post] {
    Runtime.trap("not implemented");
  };

  public query func getReelById(reelId : PostTypes.PostId) : async ?PostTypes.Post {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func likeReel(reelId : PostTypes.PostId) : async Bool {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func shareReel(reelId : PostTypes.PostId) : async Bool {
    Runtime.trap("not implemented");
  };
};
