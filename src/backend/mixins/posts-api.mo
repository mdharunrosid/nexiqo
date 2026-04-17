import PostTypes "../types/posts";
import PostLib "../lib/posts";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  posts : List.List<PostTypes.PostInternal>,
  stories : List.List<PostTypes.Story>,
  nextPostId : Nat,
  nextStoryId : Nat,
) {
  public shared ({ caller }) func createPost(
    req : PostTypes.CreatePostRequest,
  ) : async PostTypes.Post {
    Runtime.trap("not implemented");
  };

  public query func getPost(postId : PostTypes.PostId) : async ?PostTypes.Post {
    Runtime.trap("not implemented");
  };

  public query func getFeedPosts(limit : Nat, offset : Nat) : async [PostTypes.Post] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func likePost(postId : PostTypes.PostId) : async Bool {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func createStory(
    mediaUrl : Text,
    expiresAt : CommonTypes.Timestamp,
  ) : async PostTypes.Story {
    Runtime.trap("not implemented");
  };

  public query func getActiveStories() : async [PostTypes.Story] {
    Runtime.trap("not implemented");
  };

  public query func getUserStories(userId : CommonTypes.UserId) : async [PostTypes.Story] {
    Runtime.trap("not implemented");
  };
};
