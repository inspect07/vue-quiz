interface ToastProps {
  type: string;
  message: string | number;
  style?: string;
  isDisplay: boolean;
}

export function useToast() {
  const openToast = (toast: ToastProps) => {
    const { type, message, isDisplay } = toast;
    let style = "";
    switch (type) {
      case "error":
        style = "bg-red-400";
        break;
      case "success":
        style = "bg-green-400";
        break;
      default:
        style = "bg-sky-400";
    }
    const config = {
      type,
      message: message ? message : `This is ${type}`,
      style,
      isDisplay,
    };

    return config;
  };

  const destroyToast = (toasts: any) => {
    toasts.map((toast: ToastProps) => {
      toast.isDisplay = false;
    });
    setTimeout(() => {
      toasts.splice(0, 1);
    }, 800);
  };

  return {
    openToast,
    destroyToast,
  };
}
