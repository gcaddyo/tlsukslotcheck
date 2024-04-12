# TLS UK Slot Check
## 设置指南
这是一个用于检查 TLS 签证中心（法国签证预约）位置可用性的 Tampermonkey（篡改猴/油猴）脚本。为了有效使用此脚本，请按照以下步骤操作：

1. 在您的手机上下载并安装 **Bark** 应用，用于接收通知。
2. 获取您的个人通知 Key。例如，如果您的 URL 是 `https://api.day.app/MPw9GawATC33fNEhwDPynK/`，则您的 Key 是 `MPw9GawATC33fNEhwDPynK`。
3. 在脚本中找到相应的位置，将您的 Key 替换进去。

## 运行步骤
要在浏览器中使用此脚本，请遵循以下步骤：

1. 使用运行脚本的浏览器登录 TLS 网站。
2. 打开您所在地区对应的预约链接，并替换其中的 `你的groupid` 为您的实际 group ID。

### 爱丁堡
```
https://visas-fr.tlscontact.com/services/customerservice/api/tls/appointment/gb/gbEDI2fr/table?client=fr&formGroupId=你的groupid&appointmentType=Short_Stay&appointmentStage=appointment
```

### 伦敦
```
https://visas-fr.tlscontact.com/services/customerservice/api/tls/appointment/gb/gbLON2fr/table?client=fr&formGroupId=你的groupid&appointmentType=Short_Stay&appointmentStage=appointment
```

3. 保持页面打开在最前端并等待自动刷新。
4. 运行过程中请勿关闭网页，关闭网页会导致脚本自动停止。

完成上述步骤后，保持浏览器窗口打开。脚本将自动检测预约位置的可用性。一旦检测到可用位置，脚本会自动通过 Bark 应用发送通知到您的手机，并将所有可用时间输出在网页控制台（Console）中。
