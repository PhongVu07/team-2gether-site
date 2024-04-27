import { TrophyIcon, TicketIcon } from "@heroicons/react/24/solid";

export const EVENTS = {
  "giaimini-1": {
    id: "giaimini-1",
    time: "14/04/2024",
    title: "Giải Cỏ Non I (mini giải)",
    subTitle: "Giải mini nhưng quyết tâm là không hề nhỏ",
    description: "Giải mini chào mừng Giải phóng Miền Nam 30/04.",
    results: [
      "Huy chương vàng: Phong Võ + Ngọc",
      "Huy chương bạc: Tuấn + Tiến",
      "Huy chương đồng: Phong + Đạt",
    ],
    icon: <TicketIcon className="h-4 w-4 text-sky-400" />,
  },
  "giaico-1": {
    id: "giaico-1",
    time: "10/03/2024",
    title: "Giải Cỏ I ",
    subTitle: "Giải Cỏ I quy tụ 18 tay vợt hàng đầu của CLB",
    description:
      "Giải đầu tiên được tổ chức với rất nhiều sai sót, tuy nhiên vẫn để lại tiếng vang nhất định.",
    results: [
      "Huy chương vàng: Tiến + Trân",
      "Huy chương bạc: Phong + Định",
      "Huy chương đồng: Trí + Sơn",
    ],
    icon: <TrophyIcon className="h-4 w-4 text-sky-400" />,
  },
};
