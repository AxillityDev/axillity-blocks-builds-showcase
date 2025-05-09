
import React, { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { createRoot } from 'react-dom/client';

type NotificationType = 'achievement' | 'info' | 'warning' | 'error';

interface MinecraftNotificationProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description?: string;
  type?: NotificationType;
  duration?: number;
}

export const MinecraftNotification = ({
  title,
  description,
  type = 'info',
  duration = 5000,
}: MinecraftNotificationProps) => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Show the toast notification when the component mounts
    toast({
      title: (
        <div className="flex items-center gap-2">
          <div className={`
            w-5 h-5 rounded-sm minecraft-place-block
            ${type === 'achievement' ? 'bg-yellow-500' : ''}
            ${type === 'info' ? 'bg-blue-500' : ''}
            ${type === 'warning' ? 'bg-orange-500' : ''}
            ${type === 'error' ? 'bg-red-500' : ''}
          `}></div>
          <span className="font-bold">{title}</span>
        </div>
      ) as unknown as string,
      description: description,
      duration: duration,
      className: "minecraft-container border-2 border-black shadow-[inset_-2px_-2px_0_0_#333333,inset_2px_2px_0_0_#777777]",
    });
  }, [toast, title, description, type, duration]);
  
  return null; // This component doesn't render anything directly
};

// Helper function to easily show notifications
export const showMinecraftNotification = (
  title: string, 
  description: string = '', 
  type: NotificationType = 'info',
  duration: number = 5000
) => {
  // Create and immediately remove a component instance
  const container = document.createElement('div');
  document.body.appendChild(container);
  
  const cleanup = () => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  };
  
  // Render the notification component using createRoot from react-dom/client
  const root = createRoot(container);
  root.render(
    <MinecraftNotification 
      title={title} 
      description={description} 
      type={type} 
      duration={duration} 
    />
  );
  
  // Clean up after duration
  setTimeout(cleanup, duration + 1000);
};
