import PostTypes "../types/posts";
import UserTypes "../types/users";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func createPost(
    posts : List.List<PostTypes.PostInternal>,
    nextId : Nat,
    caller : CommonTypes.UserId,
    req : PostTypes.CreatePostRequest,
  ) : PostTypes.Post {
    Runtime.trap("not implemented");
  };

  public func getPost(
    posts : List.List<PostTypes.PostInternal>,
    postId : PostTypes.PostId,
  ) : ?PostTypes.Post {
    Runtime.trap("not implemented");
  };

  public func getFeedPosts(
    posts : List.List<PostTypes.PostInternal>,
    limit : Nat,
    offset : Nat,
  ) : [PostTypes.Post] {
    Runtime.trap("not implemented");
  };

  public func likePost(
    posts : List.List<PostTypes.PostInternal>,
    caller : CommonTypes.UserId,
    postId : PostTypes.PostId,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func createStory(
    stories : List.List<PostTypes.Story>,
    nextId : Nat,
    caller : CommonTypes.UserId,
    mediaUrl : Text,
    expiresAt : CommonTypes.Timestamp,
  ) : PostTypes.Story {
    Runtime.trap("not implemented");
  };

  public func getActiveStories(
    stories : List.List<PostTypes.Story>,
    now : CommonTypes.Timestamp,
  ) : [PostTypes.Story] {
    Runtime.trap("not implemented");
  };

  public func getUserStories(
    stories : List.List<PostTypes.Story>,
    userId : CommonTypes.UserId,
    now : CommonTypes.Timestamp,
  ) : [PostTypes.Story] {
    Runtime.trap("not implemented");
  };

  public func toPublic(self : PostTypes.PostInternal) : PostTypes.Post {
    Runtime.trap("not implemented");
  };
};
