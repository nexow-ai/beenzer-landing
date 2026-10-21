---
title: Geo-NFT là gì?
description: Một NFT ghi nhớ nơi và lúc nó được tạo ra, và ai có thể xem nó. Cách Beenzer ghi địa điểm vào mỗi lần đúc, với một ví dụ thật.
date: 2026-10-20
kind: Guide
read: 4
---

NFT là một token trên blockchain, trỏ tới một tệp nội dung và cho biết ai sở hữu nó. Hầu hết NFT không nói gì về thế giới bên ngoài chuỗi khối. Geo-NFT thì có: nó ghi lại nơi nó được tạo ra, và vào lúc nào.

Đó là toàn bộ ý tưởng đằng sau Beenzer. Một bức ảnh chụp bên bờ hồ không chỉ là một bức ảnh; đó là ảnh của nơi _ấy_ vào khoảnh khắc _ấy_. Khi bạn đúc một bài đăng, Beenzer ghi cả hai vào siêu dữ liệu của token.

## Một Beenzer chứa những gì

Mỗi lần đúc sẽ tải nội dung lên Arweave, sau đó là một tệp siêu dữ liệu đặt bên cạnh, với các thuộc tính sau:

| Thuộc tính        | Những gì nó lưu                                     |
| ----------------- | --------------------------------------------------- |
| `CREATOR`         | Ví đã đăng nó                                       |
| `USERNAME`        | Tên người dùng Beenzer của người tạo                |
| `TYPE`            | Loại nội dung: ảnh, video hoặc âm thanh             |
| `SUPPLY`          | Số ấn bản tối đa có thể tồn tại                     |
| `FLOOR`           | Giá của một ấn bản                                  |
| `DATE`, `TIME UTC`| Thời điểm nó được đúc                               |
| `CITY`            | Thành phố nơi nó được đăng                          |
| `LATITUDE`, `LONGITUDE` | Điểm trên bản đồ                              |
| `VISIBILITY`      | Khoảng cách xa nhất mà nó có thể được tìm thấy, hoặc toàn cầu |
| `MAX LAT` … `MIN LON` | Bán kính đó, dưới dạng một khung trên bản đồ   |

## Một ví dụ thật

Đây là BEENZER #18, được @vincent đúc ngày 16 tháng 2 năm 2023. Đây là các thuộc tính của nó đúng như trên Arweave, với tọa độ được làm tròn ở đây đến khoảng một kilômét, bằng phạm vi hiển thị của chính bài đăng:

```json
{
  "name": "BEENZER #18",
  "description": "🤘",
  "symbol": "BEENZER",
  "attributes": [
    { "trait_type": "USERNAME", "value": "vincent" },
    { "trait_type": "TYPE", "value": "image/png" },
    { "trait_type": "SUPPLY", "value": "1" },
    { "trait_type": "FLOOR", "value": "0.1 SOL" },
    { "trait_type": "DATE", "value": "2023-02-16" },
    { "trait_type": "TIME UTC", "value": "13:41:43" },
    { "trait_type": "CITY", "value": "Savigny" },
    { "trait_type": "LATITUDE", "value": "46.54…" },
    { "trait_type": "LONGITUDE", "value": "6.72…" },
    { "trait_type": "VISIBILITY", "value": "1 km" }
  ]
}
```

Bạn có thể tự kiểm tra token này [trên Solscan](https://solscan.io/token/BXzXwJVhqQerunAWnjnXPyhtXG4SGrMQWtstp8rshKFZ).

## Vì sao cái khung quan trọng

Bán kính hiển thị không phải để trang trí. Khi bạn mở bản đồ, Beenzer hiển thị những bài đăng có khung hiển thị chứa vị trí của bạn, cùng với những bài được đặt ở chế độ toàn cầu. Một bài đăng có bán kính 1 km là thứ bạn tìm thấy bằng cách có mặt ở đó. Còn bài đăng toàn cầu thì ai cũng xem được.

Vậy geo-NFT là hai thứ cùng lúc: một bản ghi về một nơi chốn, và một cách gửi lại điều gì đó ở một nơi cho những người đi ngang qua.

## Đúc NFT tốn bao nhiêu

Đúc biến một bài đăng thành một token bạn giữ trong ví, với các ấn bản mà người khác có thể sưu tầm. Việc này tốn một khoản phí đúc bằng SOL, và ứng dụng hiển thị khoản phí đó, cùng nơi nó được chuyển đến, trước khi bạn xác nhận bất cứ điều gì trong Phantom.
