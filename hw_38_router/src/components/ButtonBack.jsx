import { useNavigate } from 'react-router-dom';

import { Button } from './index.jsx';

export const ButtonBack = () => {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation(-1);
  };

  return (
    <Button onClick={handleGoBack} type="primary" className="text-neutral-900">
      Back
    </Button>
  );
};

