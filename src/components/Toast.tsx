"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export interface ToastData {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  message: string;
}

interface ToastProps {
  toast: ToastData;
  onDismiss: (id: string) => void;
}

const Toast = ({ toast, onDismiss }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: CheckCircle,
  };

  const colors = {
    success: "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20",
    error: "bg-red-50 text-red-500 border-red-100",
    info: "bg-primary-50 text-primary-500 border-primary-100",
  };

  const Icon = icons[toast.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex items-start gap-3 p-4 rounded-[18px] border shadow-soft bg-white ${colors[toast.type]}`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colors[toast.type]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[#111827] text-sm">{toast.title}</p>
        <p className="text-[#6B7280] text-xs mt-0.5">{toast.message}</p>
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9CA3AF] hover:text-[#6B7280] hover:bg-[#F8FAFC] transition-all duration-200 flex-shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

// Toast Container
interface ToastContainerProps {
  toasts: ToastData[];
  onDismiss: (id: string) => void;
}

export const ToastContainer = ({ toasts, onDismiss }: ToastContainerProps) => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Toast Hook
let toastId = 0;
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (type: ToastData["type"], title: string, message: string) => {
    const id = `toast-${++toastId}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    toasts,
    addToast,
    dismissToast,
    success: (title: string, message: string) => addToast("success", title, message),
    error: (title: string, message: string) => addToast("error", title, message),
    info: (title: string, message: string) => addToast("info", title, message),
  };
};

export default Toast;
