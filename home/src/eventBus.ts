// host-app/src/eventBus.ts
const handlers: Record<string, ((data: any) => void)[]> = {};

export function publish(topic: string, data: any) {
  window.dispatchEvent(new CustomEvent("pubsub", { detail: { topic, data } }));
}

export function subscribe(topic: string, handler: (data: any) => void) {
  const list = handlers[topic] || [];
  list.push(handler);
  handlers[topic] = list;
}

export function unsubscribe(topic: string, handler: (data: any) => void) {
  const list = handlers[topic] || [];
  const index = list.indexOf(handler);
  if (index >= 0) list.splice(index, 1);
  handlers[topic] = list;
}

window.addEventListener("pubsub", (e: any) => {
  const { topic, data } = e.detail;
  (handlers[topic] || []).forEach((fn) => fn(data));
});
