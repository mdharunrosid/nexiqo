import NotifTypes "../types/notifications";
import CommonTypes "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func createNotification(
    notifications : List.List<NotifTypes.NotificationInternal>,
    nextId : Nat,
    userId : CommonTypes.UserId,
    type_ : NotifTypes.NotificationType,
    actorId : CommonTypes.UserId,
    entityId : Nat,
  ) : NotifTypes.Notification {
    Runtime.trap("not implemented");
  };

  public func getUserNotifications(
    notifications : List.List<NotifTypes.NotificationInternal>,
    userId : CommonTypes.UserId,
    limit : Nat,
    offset : Nat,
  ) : [NotifTypes.Notification] {
    Runtime.trap("not implemented");
  };

  public func markAsRead(
    notifications : List.List<NotifTypes.NotificationInternal>,
    caller : CommonTypes.UserId,
    notificationId : NotifTypes.NotificationId,
  ) : Bool {
    Runtime.trap("not implemented");
  };

  public func markAllAsRead(
    notifications : List.List<NotifTypes.NotificationInternal>,
    userId : CommonTypes.UserId,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func getUnreadCount(
    notifications : List.List<NotifTypes.NotificationInternal>,
    userId : CommonTypes.UserId,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func toPublic(self : NotifTypes.NotificationInternal) : NotifTypes.Notification {
    Runtime.trap("not implemented");
  };
};
