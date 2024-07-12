import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
  
interface AlertProps {
    title: string;
    description: string;
}

const AlertChangePage: React.FC<AlertProps> = ({ title, description }) => {
    return (
        <Alert>
          <FaSpinner className="animate-spin h-4 w-4" />
          <AlertTitle>{title}!</AlertTitle>
          <AlertDescription>
                {description}          
                </AlertDescription>
        </Alert>
        
    );
};

export default AlertChangePage;