# TLS UK Slot Check
## 设置
这是一个用于检查 TLS 签证中心法国签证预约位置可用性的 Tampermonkey（篡改猴/油猴）脚本。要使用此脚本，您需要首先完成以下几个步骤：

1. 下载并安装应用 **Bark**，用于接收通知。
2. 获取您的个人通知 Key。例如，如果您的 URL 是 `https://api.day.app/MPw9GawATC33fNEhwDPynK/`，则您的 Key 是 `MPw9GawATC33fNEhwDPynK`。
3. 在脚本中找到相应的位置，将您的 Key 替换进去。

## 运行
请按以下步骤操作，以在浏览器中打开页面：

### 爱丁堡
打开以下链接，替换其中的 `你的groupid` 为您的实际 group ID：

```
https://visas-fr.tlscontact.com/services/customerservice/api/tls/appointment/gb/gbEDI2fr/table?client=fr&formGroupId=你的groupid&appointmentType=Short_Stay&appointmentStage=appointment
```

### 伦敦
打开以下链接，同样替换 `你的groupid` 为您的实际 group ID：

```
https://visas-fr.tlscontact.com/services/customerservice/api/tls/appointment/gb/gbLON2fr/table?client=fr&formGroupId=你的groupid&appointmentType=Short_Stay&appointmentStage=appointment
```

完成上述步骤后，留下浏览器窗口打开，脚本将自动检测预约位置的可用性。一旦检测到可用位置，脚本会自动通过 Bark 应用发送通知到您的手机。
