import React, { useEffect } from 'react';

function useGenerateWorkout(workout) {
  const [generatedWorkout, setGeneratedWorkout] = React.useState(workout);

  useEffect(() => {
    setGeneratedWorkout(prev => ({ ...prev, test: "test" }));
  }
  , []);

  return generatedWorkout;
}

export default useGenerateWorkout;