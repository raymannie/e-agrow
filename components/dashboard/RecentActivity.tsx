interface Activity {
  id: string;
  type: "order" | "payment" | "message" | "view";
  description: string;
  time: string;
  status?: "success" | "pending" | "warning";
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "success":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "warning":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "order":
        return "📦";
      case "payment":
        return "💰";
      case "message":
        return "💬";
      case "view":
        return "👁️";
      default:
        return "📋";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="text-xl">{getActivityIcon(activity.type)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
            {activity.status && (
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  activity.status
                )}`}
              >
                {activity.status}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
