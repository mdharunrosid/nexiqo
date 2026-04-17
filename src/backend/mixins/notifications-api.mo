import NotifTypes "../types/notifications";
import CommonTypes "../types/common";
import NotifLib "../lib/notifications";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  notifications : List.List<NotifTypes.NotificationInternal>,
  nextNotifId : Nat,
) {
  public query ({ caller }) func getMyNotifications(
    limit : Nat,
    offset : Nat,
  ) : async [NotifTypes.Notification] {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func markNotificationRead(
    notificationId : NotifTypes.NotificationId,
  ) : async Bool {
    Runtime.trap("not implemented");
  };

  public shared ({ caller }) func markAllNotificationsRead() : async Nat {
    Runtime.trap("not implemented");
  };

  public query ({ caller }) func getUnreadNotificationCount() : async Nat {
    Runtime.trap("not implemented");
  };
};
