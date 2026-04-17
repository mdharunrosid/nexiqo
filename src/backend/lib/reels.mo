import PostTypes "../types/posts";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func getTrendingReels(
    posts : List.List<PostTypes.PostInternal>,
    limit : Nat,
  ) : [PostTypes.Post] {
    Runtime.trap("not implemented");
  };

  public func getReelById(
    posts : List.List<PostTypes.PostInternal>,
    reelId : PostTypes.PostId,
  ) : ?PostTypes.Post {
    Runtime.trap("not implemented");
  };

  public func likeReel(
    posts : List.List<PostTypes.PostInternal>,
    caller : CommonTypes.UserId,
    reelId : PostTypes.PostId,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func shareReel(
    posts : List.List<PostTypes.PostInternal>,
    caller : CommonTypes.UserId,
    reelId : PostTypes.PostId,
  ) : Bool {
    Runtime.trap("not implemented");
  };
};
