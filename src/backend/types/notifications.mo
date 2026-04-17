import Common "common";

module {
  public type NotificationId = Common.NotificationId;
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type NotificationType = {
    #like;
    #comment;
    #follow;
    #live;
  };

  public type Notification = {
    id : NotificationId;
    userId : UserId;
    type_ : NotificationType;
    actorId : UserId;
    entityId : Nat;
    isRead : Bool;
    createdAt : Timestamp;
  };

  public type NotificationInternal = {
    id : NotificationId;
    userId : UserId;
    type_ : NotificationType;
    actorId : UserId;
    entityId : Nat;
    var isRead : Bool;
    createdAt : Timestamp;
  };
};
