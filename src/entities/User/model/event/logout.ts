const eventName = 'logout-event';

const logoutEvent = new CustomEvent(eventName);

export function triggerLogoutEvent() {
  return document.dispatchEvent(logoutEvent);
}

export const listenLogoutEvent = (callback: () => void) => {
  document.addEventListener(eventName, callback);
  return {
    unsubscribeEvent: () => {
      document.removeEventListener(eventName, callback);
    },
  };
};
