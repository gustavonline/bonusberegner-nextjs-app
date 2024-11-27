"use client";
import React, { useEffect } from 'react';

const ChatWidgetLoader = () => {
  useEffect(() => {
    const loadScript = () => {
      let chatRoot = document.getElementById('chat-widget-root');
      if (!chatRoot) {
        chatRoot = document.createElement('div');
        chatRoot.id = 'chat-widget-root';
        document.body.appendChild(chatRoot);
      }

      if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
        window.myChatWidget.load({
          id: '3e1e2965-81b8-42af-bb8c-ece36df1ebc8',
        });
      }
    };

    // Create the script element to load the widget
    const script = document.createElement('script');
    script.src = 'https://your-domain.com/static/chat-widget.min.js'; // Replace with your actual URL
    script.type = 'text/javascript';
    script.async = true;
    script.onload = loadScript;

    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      const chatRoot = document.getElementById('chat-widget-root');
      if (chatRoot) {
        document.body.removeChild(chatRoot);
      }
    };
  }, []);

  return null;
};

export default ChatWidgetLoader;
