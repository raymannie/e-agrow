interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: "green" | "blue" | "orange" | "purple";
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = "green",
}: StatCardProps) {
  const colorClasses = {
    green: "bg-gradient-to-r from-green-500 to-emerald-600",
    blue: "bg-gradient-to-r from-blue-500 to-cyan-600",
    orange: "bg-gradient-to-r from-orange-500 to-amber-600",
    purple: "bg-gradient-to-r from-purple-500 to-pink-600",
  };

  return (
    <div
      className={`${colorClasses[color]} text-white p-6 rounded-xl shadow-lg`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {subtitle && <p className="text-white/70 text-sm mt-1">{subtitle}</p>}
          {trend && (
            <div className="flex items-center mt-2">
              <span
                className={`text-sm ${
                  trend.isPositive ? "text-green-200" : "text-red-200"
                }`}
              >
                {trend.isPositive ? "↗" : "↘"} {trend.value}%
              </span>
              <span className="text-white/70 text-sm ml-1">vs last month</span>
            </div>
          )}
        </div>
        {icon && <div className="text-white/80">{icon}</div>}
      </div>
    </div>
  );
}
