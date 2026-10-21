---
title: Beenzer đang được xây dựng lại bằng Flutter
description: Ứng dụng chuyển về Nexow, Inc. và có một ứng dụng khách mới cho iOS và Android, trên cùng máy chủ. Đây là những gì thay đổi và những gì giữ nguyên.
date: 2026-10-20
kind: News
read: 3
---

Beenzer ra đời vào tháng 11 năm 2022 như một dApp di động trên Solana, viết bằng React Native. Vào tháng 10 năm 2026, nó trở thành sản phẩm của [Nexow, Inc.](https://nexow.studio), có một kho mã mới, và ứng dụng được đưa trở lại bàn làm việc. Hiện ứng dụng đang được viết lại bằng Flutter, cho iOS và Android.

## Những gì giữ nguyên

Ý tưởng: một bức ảnh hay một video thuộc về nơi nó được chụp. Bạn đăng nó tại nơi bạn đang ở, bạn bè tìm thấy nó trên bản đồ, và bài đăng nào cũng có thể trở thành NFT trên Solana, mang theo địa điểm và khoảnh khắc của nó.

Máy chủ cũng giữ nguyên. Ứng dụng Flutter là một ứng dụng khách mới cho cùng một backend, nên các quy tắc bạn đã biết vẫn áp dụng: đăng nhập bằng Phantom, cùng bán kính hiển thị, cùng cách đúc NFT.

## Những gì thay đổi

Gần như mọi thứ bạn chạm vào.

- **Thanh dock thay cho thanh tab.** Một thanh kính nổi hình viên thuốc với Bản đồ, Xã hội, Trò chuyện và Hồ sơ, cùng nút Tạo ở giữa. Nhấn Tạo để mở máy ảnh; nhấn giữ để chọn ảnh, video, thứ gì đó từ thư viện, hoặc âm thanh.
- **Hộp thư cho các lượt đúc.** Việc đúc NFT gồm vài bước, và giờ đây chúng hiện ra ở nơi bạn có thể theo dõi: vị trí của bạn trong hàng chờ, từng bước, và kết quả.
- **Không còn màn hình trống.** Mỗi màn hình đều được thiết kế cho những khoảnh khắc ở giữa: đang tải, trống, lỗi có thể thử lại, ngoại tuyến, và máy chủ không phản hồi.
- **Bản nháp của bạn không bị mất.** Một lượt đúc đang chờ chữ ký của bạn được lưu lại trước khi Phantom mở ra, nên nó vẫn còn đó nếu điện thoại đóng ứng dụng khi chạy nền.
- **Sáng và tối**, theo hệ thống của bạn, và có thể đổi trong hồ sơ. Tiếng Anh và tiếng Pháp ngay từ ngày đầu.
- **Hỗ trợ tiếp cận theo mặc định.** Nhãn trên mọi biểu tượng, vùng chạm tối thiểu 44 điểm, bố cục vẫn giữ vững với chữ cỡ lớn, và hiệu ứng chuyển động tôn trọng chế độ giảm chuyển động.

## Đăng nhập

Ví của bạn là tài khoản của bạn. Beenzer yêu cầu Phantom kết nối, sau đó yêu cầu bạn ký một tin nhắn dùng một lần để chứng minh ví là của bạn. Không có email và không có mật khẩu. Nếu Phantom chưa được cài đặt, ứng dụng sẽ báo cho bạn và chỉ bạn đến đó.

## Khi nào

Hiện chưa có ngày cụ thể, và chúng tôi muốn ra mắt cho đúng hơn là ra mắt cho kịp một ngày nào đó. Theo dõi [@beenzer_app](https://x.com/beenzer_app) trên X hoặc [Instagram](https://www.instagram.com/beenzer_app/) để biết tin đầu tiên.
