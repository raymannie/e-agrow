interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
}: StepIndicatorProps) {
  return (
    <div className="flex justify-center items-center space-x-4 mb-8">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : isActive
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }
              `}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>
            {stepNumber < totalSteps && (
              <div
                className={`w-12 h-0.5 mx-2 ${
                  isCompleted ? "bg-green-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
