import { LocalShipping, Payment, ChangeCircle } from "@mui/icons-material";
const dataService = [
  {
    id: 1,
    title: "miễn phí giao hàng",
    description: "giao hàng miễn phi,xem hàng và thanh toán khi nhận hàng",
    Icon: LocalShipping,
  },
  {
    id: 2,
    title: "hỗ trợ trả góp",
    description:
      "thanh toán mọi lúc,không tính lãi suất khi trả góp hàng tháng",
    Icon: Payment,
  },
  {
    id: 3,
    title: "1 đổi 1",
    description: "trong vòng 30 ngày kể từ ngày mua có thể 1 đổi 1",
    Icon: ChangeCircle,
  },
];
export default dataService;
