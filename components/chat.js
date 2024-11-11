"use client";
import React, { useEffect } from 'react';

const ChatWidgetLoader = () => {
  useEffect(() => {
    const loadScript = () => {
      let root = document.getElementById('root');
      if (!root) {
        root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
      }

      if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
        window.myChatWidget.load({
          id: '3e1e2965-81b8-42af-bb8c-ece36df1ebc8',
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://agentivehub.com/production.bundle.min.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = loadScript;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  return null;
};

export default ChatWidgetLoader;
