// @/components/ui/layouts/auth-layout.tsx
import React from 'react';

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;
