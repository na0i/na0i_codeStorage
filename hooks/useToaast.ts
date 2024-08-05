import { atom, useRecoilState } from "recoil";

const toastState = atom({
  key: "toastState",
  default: [],
});

const useToast = () => {
  const [toastList, setToastList] = useRecoilState(toastState);

  const openToast = ({
    type,
    message,
  }: {
    type: "success" | "error";
    message: string;
  }) => {
    const id = Math.random();

    const newToast = { id, type, message };
    setToastList([...toastList, newToast]);

    setTimeout(() => {
      closeToast(id);
    }, 3000);
  };

  const closeToast = (id: number) => {
    // setToastList(toastList.filter((toast) => toast.id !== id)) 로 쓰지 않도록 주의
    // setState는 상태를 비동기로 업데이트하기 때문에 예상치 못한 방식으로 동작할 수 있다. (batching 작업)
    // prev를 사용하면 항상 최신 상태를 보장하기 때문에 동시 업데이트가 발생해도 안전하다.
    setToastList((prev) => prev.filter((toast) => toast.id !== id));
  };

  return {
    toastList,
    openToast,
    closeToast,
  };
};

export default useToast;
