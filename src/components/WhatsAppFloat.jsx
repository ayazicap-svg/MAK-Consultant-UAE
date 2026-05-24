import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/971565682013"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50"
    >
      <MessageCircle />
    </a>
  );
};

export default WhatsAppFloat;